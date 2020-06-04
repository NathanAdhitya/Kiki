import {Client, ClientOptions} from "discord.js";
import KikiClientLogger from "./KikiClientLogger";
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
    interrupter: InterruptModuleManager;
    dataStore: DataStoreManager;
    constructor(options?: ClientOptions);
    loadSettings(): void;
    connectDataStore(): Promise<void>;
    login(token?: string): Promise<string>;
    toString(): string;
}
export default KikiClient;
//# sourceMappingURL=KikiClient.d.ts.map
