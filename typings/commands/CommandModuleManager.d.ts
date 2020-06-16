import { Snowflake } from "discord.js";
import KikiModuleManager from "../KikiModuleManager";
import KikiClient from "../client/KikiClient";
import CommandModule from "./CommandModule";
declare class CommandManager extends KikiModuleManager {
    readonly prefixes: string[];
    readonly triggers: Map<string, string>;
    guildCommandUses: Map<Snowflake, Map<string, Map<Snowflake, number>>>;
    helpEntries: Map<string, Map<string, CommandModule>>;
    readonly defaultCooldown: number;
    constructor(client: KikiClient);
    private initialize;
    protected storeModule(module: CommandModule): void;
    private handle;
    private parseCommandTrigger;
}
export default CommandManager;
//# sourceMappingURL=CommandModuleManager.d.ts.map