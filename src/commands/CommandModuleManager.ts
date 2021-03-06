import yargsParser = require("yargs-parser");
import {DMChannel, Message, Snowflake, TextChannel} from "discord.js";

import KikiModuleManager from "../KikiModuleManager";
import KikiClient from "../client/KikiClient";
import CommandModule from "./CommandModule";
import InterruptModule from "../interrupters/InterruptModule";
import {MODULE_MANAGER_EVENTS, MODULE_EXECUTE_STATUS} from "../utils/Constants";


interface CommandTriggerObject {
    prefix: string;
    command: string;
    arguments: string;
}

/**
 * Command Module Manager loads commands and handles their execution based on
 * their specified parameters.
 */
class CommandManager extends KikiModuleManager {
    /** Prefixes, prefixes everywhere. */
    readonly prefixes: string[];
    /** Commands and aliases, all in one. */
    readonly triggers: Map<string, string>;
    /** Per guild command uses. */
    guildCommandUses: Map<Snowflake, Map<string, Map<Snowflake, number>>>;
    /** Map of categories that contains a map of commands. */
    helpEntries: Map<string, Map<string, CommandModule>>;
    /** Default cooldown */
    readonly defaultCooldown: number;

    constructor(client: KikiClient) {
        super(client, {directory: "./commands/"});

        this.prefixes = client.configurations.prefixes;
        this.triggers = new Map<string, string>();
        this.guildCommandUses = new Map<Snowflake, Map<string, Map<Snowflake, number>>>();
        this.helpEntries = new Map<string, Map<string, CommandModule>>();

        this.initialize();

        super.load();
    }

    private initialize(): void {
        this.client.once("ready", () => {
            this.client.on("message", (message: Message) => {
                if (message.author.bot) return;

                this.handle(message);
            });
        });
    }

    protected storeModule(module: CommandModule): void {
        super.storeModule(module);

        for (const trigger of module.triggers) {
            this.triggers.set(trigger.toLowerCase(), module.name.toLowerCase());
        }

        // Store the help entry.
        if (!this.helpEntries.has(module.category)) this.helpEntries.set(module.category, new Map());
        this.helpEntries.get(module.category).set(module.name, module);
    }

    private async handle(message: Message): Promise<boolean> {
        for (const interrupt of this.client.interrupter.modules.array() as InterruptModule[]) {
            if (await interrupt.exec(message)) {
                // TODO: interrupt callback?
                return false;
            }
        }

        // TODO: Support for all Command Module options
        if (message.guild && !message.member) {
            await message.client.users.fetch(message.author.id);
            await message.guild.members.fetch(message.author);
        }

        // TODO: add support for guild prefixes
        const guildPrefixes: string[] = [];


        const commandTrigger: CommandTriggerObject = this.parseCommandTrigger(message, guildPrefixes);

        if (!commandTrigger) {
            // This is not a command
            return false;
        }


        let command: CommandModule;
        if (this.modules.has(commandTrigger.command)) {
            command = this.modules.get(commandTrigger.command) as CommandModule;
        } else if (this.triggers.has(commandTrigger.command)) {
            command = this.modules.get(this.triggers.get(commandTrigger.command)) as CommandModule;
        }

        if (!command) {
            // This command doesn't exist
            return false;
        }


        // Check for command's scope
        switch (command.scope) {
        case "guild":
            if (!(message.channel instanceof TextChannel)) return;
            break;

        case "dm":
            if (!(message.channel instanceof DMChannel)) return;
            break;
        }

        // Check if user is bot owner
        if (command.owner && !this.client.credentials.owners.includes(message.author.id)) return false;

        if (message.guild) {
            // Check if the client has perms required for the command
            if (command.clientPermissions && !message.guild.me.permissionsIn(message.channel).has(command.clientPermissions)) return false;

            // Check if user has perms to run the commands
            if (command.userPermissions && !message.member.permissionsIn(message.channel).has(command.userPermissions)) return false;
        }

        // Check if Command condition is met
        if (!command.condition()) return false;


        // Command cooldown
        if (command.cooldown && command.ratelimit) {
            if (!this.guildCommandUses.has(message.guild.id)) {
                this.guildCommandUses.set(message.guild.id, new Map<string, Map<Snowflake, number>>());
            }

            if (!this.guildCommandUses.get(message.guild.id).has(command.name)) {
                this.guildCommandUses.get(message.guild.id).set(command.name, new Map<Snowflake, number>());
            }

            // Member's use count
            let useCount = 0;
            if (this.guildCommandUses.get(message.guild.id).get(command.name).has(message.author.id)) {
                useCount = this.guildCommandUses.get(message.guild.id).get(command.name).get(message.author.id) || 0;
            }

            // Check whether the member is rate limited
            if (useCount >= command.ratelimit) {
                return; // TODO: rate limit message?
            }

            // Increase the use count
            this.guildCommandUses.get(message.guild.id).get(command.name).set(message.author.id, useCount + 1);

            // Remove the member's rate limit
            this.client.setTimeout(() => {
                this.guildCommandUses.get(message.guild.id).get(command.name).delete(message.author.id);
            }, command.cooldown * 1000);
        }


        // Start a typing indicator before starting to execute the command
        if (command.typing) {
            message.channel.startTyping().catch(() => {
            // We can happily ignore this error.
            });
        }


        const parsedArguments: yargsParser.Arguments = yargsParser(commandTrigger.arguments, command.arguments);
        parsedArguments._raw = commandTrigger.arguments;

        await command.exec(message, parsedArguments)
            .then(() => this.emit(MODULE_MANAGER_EVENTS.COMMAND_MODULE_EXECUTE, this, MODULE_EXECUTE_STATUS.SUCCESS, command, message))
            .catch((e: Error) => this.emit(MODULE_MANAGER_EVENTS.COMMAND_MODULE_EXECUTE, this, MODULE_EXECUTE_STATUS.FAILED, command, message, e));


        // Stop the typing indicator after executing the command
        if (command.typing) message.channel.stopTyping();


        return true;
    }

    /**
     * Parses a raw message content and returns the command trigger object.
     */
    private parseCommandTrigger(message: Message, guildPrefixes: string[] = []): CommandTriggerObject {
        const prefixes: string[] = guildPrefixes && guildPrefixes.length ? guildPrefixes : this.prefixes;

        const triggerRegExp = new RegExp("^(" + prefixes.join("|").replace(/[.*+?^${}()[\]\\]/g, "\\$&") + ")[a-z0-9]+(?:$| )", "i");

        const trigger: RegExpMatchArray = message.content.match(triggerRegExp);
        if (!trigger) return null;

        const [prefixedCommand, usedPrefix] = trigger;

        const command: string = prefixedCommand.slice(usedPrefix.length).toLowerCase().trim();
        const args: string = message.content.slice(prefixedCommand.length).trim();

        return {
            prefix: usedPrefix,
            command: command,
            arguments: args,
        };
    }
}


export default CommandManager;
