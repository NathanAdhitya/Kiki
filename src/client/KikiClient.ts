/* !
 * @file KikiClient Class
 */

import {Client, ClientOptions} from "discord.js";

import KikiClientLogger from "./KikiClientLogger";
import KikiWebhook from "./KikiWebhook";
import KikiClientUtils from "./KikiClientUtils";
import KikiDataResolver from "./KikiDataResolver";
import DataStoreManager from "../datastore/DataStoreManager";
import InterruptModuleManager from "../interrupters/InterruptModuleManager";
import ListenerModuleManager from "../listeners/ListenerModuleManager";
import MonitorModuleManager from "../monitors/MonitorModuleManager";
import CommandModuleManager from "../commands/CommandModuleManager";
import SchedulerModuleManager from "../schedulers/SchedulerModuleManager";
import * as settings from "../utils/settings";


/**
 * The KikiClient is the starting point for Discord bots.
 */
class KikiClient extends Client {
    configurations: settings.KikiConfigurations;
    credentials: settings.KikiCredentials;
    log: KikiClientLogger;
    resolver: KikiDataResolver;
    utils: KikiClientUtils;
    webhook: KikiWebhook;
    interrupter: InterruptModuleManager;
    dataStore: DataStoreManager;
    baseDir: string;

    constructor(options: ClientOptions = {}, baseDir?: string) {
        super(options);

        // Base directory for loading all modules.
        this.baseDir = baseDir || ".";

        // Load settings
        this.loadSettings();

        // Logger
        this.log = new KikiClientLogger(this);

        // Data resolver
        this.resolver = new KikiDataResolver(this);

        // Utility methods
        this.utils = new KikiClientUtils(this);

        // Webhooks
        this.webhook = new KikiWebhook(this);

        // DataStore
        this.dataStore = this.credentials.datastore ?
            new DataStoreManager({
                uri: this.credentials.datastore.uri,
            }) :
            null;

        // Kiki Managers
        this.interrupter = new InterruptModuleManager(this);
        new ListenerModuleManager(this);
        new MonitorModuleManager(this);
        new CommandModuleManager(this);
        new SchedulerModuleManager(this);
    }

    /**
     * Loads the configurations and credentials files from the settings directory.
     */
    public loadSettings(): void {
        this.configurations = settings.getConfigurations();
        this.credentials = settings.getCredentials();
    }

    /**
     * Establish connection to the DataStore.
     */
    public async connectDataStore(): Promise<void> {
        if (!this.dataStore) return;
        await this.dataStore.connect();
    }

    /**
     * Apply client's configurations.yaml
     */
    public async applyStartupConfiguration(): Promise<void> {
        await this.user.setPresence({
            status: this.configurations.status || "online",
            activity: {
                name: this.configurations.activity.name instanceof Array ?
                    this.configurations.activity.name[0] :
                    this.configurations.activity.name,
                type: this.configurations.activity.type,
                url: this.configurations.activity.url,
            },
        });
    }

    /**
     * Logs the client in, establishing a websocket connection to Discord.
     */
    public async login(token?: string): Promise<string> {
        // Connect to DataStore before logging in
        await this.connectDataStore();

        if (token) this.credentials.token = token;
        return super.login(this.credentials.token);
    }

    public toString(): string {
        return "Kiki";
    }
}


export default KikiClient;
