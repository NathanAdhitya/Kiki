import { ActivityType, PresenceStatusData } from "discord.js";
export interface KikiConfigurations {
    shardCount: number;
    prefixes: string[];
    status: PresenceStatusData;
    activity: {
        type: ActivityType;
        name: string | string[];
        url?: string;
        interval: 60;
    };
    logLevel: number;
    autoUpdate: boolean;
    allowUnsafeCommands: boolean;
}
export interface KikiCredentials {
    botId: string;
    owners: string[];
    token: string;
    datastore?: {
        uri: string;
    };
    webhooks?: {
        [name: string]: string;
    };
}
export declare const getConfigurations: () => KikiConfigurations;
export declare const getCredentials: () => KikiCredentials;
//# sourceMappingURL=settings.d.ts.map