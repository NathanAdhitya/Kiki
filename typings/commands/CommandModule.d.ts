import {PermissionResolvable, Message} from "discord.js";
import {Options as ArgumentParserOptions, Arguments as CommandArguments} from "yargs-parser";
import KikiModule from "../KikiModule";
interface CommandModuleOptions {
    description?: string;
    triggers?: string[];
    arguments?: ArgumentParserOptions;
    scope?: "guild" | "dm";
    owner?: boolean;
    typing?: boolean;
    cooldown?: number;
    ratelimit?: number;
    clientPermissions?: PermissionResolvable[];
    userPermissions?: PermissionResolvable[];
    condition?: () => boolean;
}
declare abstract class CommandModule extends KikiModule {
    description: string;
    triggers: string[];
    arguments: ArgumentParserOptions;
    scope: "guild" | "dm";
    owner: boolean;
    typing: boolean;
    cooldown: number;
    ratelimit: number;
    clientPermissions: PermissionResolvable[];
    userPermissions: PermissionResolvable[];
    condition: () => boolean;
    constructor(name: string, options?: CommandModuleOptions);
    abstract exec(message: Message, argv: CommandArguments): Promise<unknown>;
}
export default CommandModule;
//# sourceMappingURL=CommandModule.d.ts.map
