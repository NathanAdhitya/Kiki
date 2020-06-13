﻿import { Client, ClientOptions } from "discord.js";
import KikiClientLogger from "./KikiClientLogger";
import KikiWebhook from "./KikiWebhook";
import KikiClientUtils from "./KikiClientUtils";
import KikiDataResolver from "./KikiDataResolver";
import DataStoreManager from "../datastore/DataStoreManager";
import InterruptModuleManager from "../interrupters/InterruptModuleManager";
import * as settings from "../utils/settings";
declare class KikiClient extends Client {
    configurations: settings.KikiConfigurations;
    credentials: settings.KikiCredentials;
    log: KikiClientLogger;
    resolver: KikiDataResolver;
    utils: KikiClientUtils;
    webhook: KikiWebhook;
    interrupter: InterruptModuleManager;
    dataStore: DataStoreManager;
    baseDir: string;
    constructor(options?: ClientOptions, baseDir?: string);
    loadSettings(): void;
    connectDataStore(): Promise<void>;
    applyStartupConfiguration(): Promise<void>;
    login(token?: string): Promise<string>;
    toString(): string;
}
export default KikiClient;
//# sourceMappingURL=KikiClient.d.ts.map