﻿"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const KikiModuleManager_1 = require("../KikiModuleManager");
class MonitorModuleManager extends KikiModuleManager_1.default {
    constructor(client) {
        super(client, { directory: "./monitors/" });
        this.load();
    }
    load() {
        super.load();
        const monitors = {};
        const modules = this.modules;
        modules.forEach(monitor => {
            if (Object.prototype.hasOwnProperty.call(monitors, monitor.event)) {
                monitors[monitor.event].push(monitor);
            }
            else {
                monitors[monitor.event] = [monitor];
            }
        });
        for (const event of Object.keys(monitors)) {
            this.client.once(event, (...args) => {
                for (const monitor of monitors[event]) {
                    this.client.setInterval(monitor.exec, monitor.frequency * 1000, ...args);
                }
            });
        }
    }
}
exports.default = MonitorModuleManager;
//# sourceMappingURL=MonitorModuleManager.js.map