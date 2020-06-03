/*!
 * @file KikiClient Class
 * @author Sankarsan Kampa (a.k.a. k3rn31p4nic)
 */

import { Client, ClientOptions } from "discord.js";

import KikiClientLogger from "./KikiClientLogger";
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
    interrupter: InterruptModuleManager;
    dataStore: DataStoreManager;

    constructor(options: ClientOptions = {}) {
        super(options);

        // Load settings
        this.loadSettings();

        // Logger
        this.log = new KikiClientLogger(this);

        // Data resolver
        this.resolver = new KikiDataResolver(this);

        // Utility methods
        this.utils = new KikiClientUtils(this);

        // DataStore
        this.dataStore = this.credentials.datastore
            ? new DataStoreManager({
                dialect: this.credentials.datastore.dialect,
                providerOptions: {
                    uri: this.credentials.datastore.uri,
                    logging: false,
                },
            })
            : null;

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
        await this.dataStore.store.connect();
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
