import * as discord from "discord.js";
import KikiClient from "./KikiClient";
export default class KikiDataResolver {
    client: KikiClient;
    constructor(client: KikiClient);
    resolveGuild(guild: discord.GuildResolvable): discord.Guild;
    resolveGuildChannel(guild: discord.GuildResolvable, channel: discord.GuildChannelResolvable, types?: ("category" | "news" | "store" | "text" | "voice")[]): discord.GuildChannel;
    resolveGuildChannels(guild: discord.GuildResolvable, channels: discord.GuildChannelResolvable[], types?: ("category" | "news" | "store" | "text" | "voice")[]): discord.GuildChannel[];
    resolveGuildMember(guild: discord.GuildResolvable, user: discord.UserResolvable): discord.GuildMember;
    resolveGuildMembers(guild: discord.GuildResolvable, users: discord.UserResolvable[]): discord.GuildMember[];
    resolveRole(guild: discord.GuildResolvable, role: discord.RoleResolvable): discord.Role;
    resolveRoles(guild: discord.GuildResolvable, roles: discord.RoleResolvable[]): discord.Role[];
    resolveUser(user: discord.UserResolvable): discord.User;
    resolveUsers(users: discord.UserResolvable[]): discord.User[];
}
//# sourceMappingURL=KikiDataResolver.d.ts.map
