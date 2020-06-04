import {Snowflake} from "discord.js";
import KikiModuleManager from "../KikiModuleManager";
import KikiClient from "../client/KikiClient";
import CommandModule from "./CommandModule";
declare class CommandManager extends KikiModuleManager {
    prefixes: string[];
    triggers: Map<string, string>;
    guildCommandUses: Map<Snowflake, Map<string, Map<Snowflake, number>>>;
    defaultCooldown: number;
    constructor(client: KikiClient);
    private initialize;
    protected storeModule(module: CommandModule): void;
    private handle;
    private parseCommandTrigger;
}
export default CommandManager;
//# sourceMappingURL=CommandModuleManager.d.ts.map
