﻿import { GuildEmoji, DMChannel, TextChannel, VoiceChannel, CategoryChannel, NewsChannel, StoreChannel, GuildMember, Guild, Message, MessageReaction, Presence, VoiceState, Role, User } from "discord.js";
declare type ExtendableStructureNames = "GuildEmoji" | "DMChannel" | "TextChannel" | "VoiceChannel" | "CategoryChannel" | "NewsChannel" | "StoreChannel" | "GuildMember" | "Guild" | "Message" | "MessageReaction" | "Presence" | "VoiceState" | "Role" | "User";
declare type ExtendableStructures = typeof GuildEmoji | typeof DMChannel | typeof TextChannel | typeof VoiceChannel | typeof CategoryChannel | typeof NewsChannel | typeof StoreChannel | typeof GuildMember | typeof Guild | typeof Message | typeof MessageReaction | typeof Presence | typeof VoiceState | typeof Role | typeof User;
declare class KikiStructureManager {
    private static resolveModules;
    static initialize(baseDir?: string): void;
}
export { ExtendableStructureNames, ExtendableStructures, };
export default KikiStructureManager;
//# sourceMappingURL=KikiStructureManager.d.ts.map