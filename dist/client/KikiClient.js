﻿"use strict";
/*!
 * @file KikiClient Class
 * @author Sankarsan Kampa (a.k.a. k3rn31p4nic)
 */
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_1 = require("discord.js");
const KikiClientLogger_1 = require("./KikiClientLogger");
const KikiClientUtils_1 = require("./KikiClientUtils");
const KikiDataResolver_1 = require("./KikiDataResolver");
const DataStoreManager_1 = require("../datastore/DataStoreManager");
const InterruptModuleManager_1 = require("../interrupters/InterruptModuleManager");
const ListenerModuleManager_1 = require("../listeners/ListenerModuleManager");
const MonitorModuleManager_1 = require("../monitors/MonitorModuleManager");
const CommandModuleManager_1 = require("../commands/CommandModuleManager");
const SchedulerModuleManager_1 = require("../schedulers/SchedulerModuleManager");
const settings = require("../utils/settings");
class KikiClient extends discord_js_1.Client {
    constructor(options = {}) {
        super(options);
        this.loadSettings();
        this.log = new KikiClientLogger_1.default(this);
        this.resolver = new KikiDataResolver_1.default(this);
        this.utils = new KikiClientUtils_1.default(this);
        this.dataStore = this.credentials.datastore
            ? new DataStoreManager_1.default({
                uri: this.credentials.datastore.uri,
            })
            : null;
        this.interrupter = new InterruptModuleManager_1.default(this);
        new ListenerModuleManager_1.default(this);
        new MonitorModuleManager_1.default(this);
        new CommandModuleManager_1.default(this);
        new SchedulerModuleManager_1.default(this);
    }
    loadSettings() {
        this.configurations = settings.getConfigurations();
        this.credentials = settings.getCredentials();
    }
    async connectDataStore() {
        if (!this.dataStore)
            return;
        await this.dataStore.connect();
    }
    async login(token) {
        await this.connectDataStore();
        if (token)
            this.credentials.token = token;
        return super.login(this.credentials.token);
    }
    toString() {
        return "Kiki";
    }
}
exports.default = KikiClient;
//# sourceMappingURL=KikiClient.js.map