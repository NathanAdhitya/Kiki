/* eslint-disable camelcase */
"use strict";
Object.defineProperty(exports, "__esModule", {value: true});
const cron = require("cron");
const KikiModuleManager_1 = require("../KikiModuleManager");
class SchedulerModuleManager extends KikiModuleManager_1.default {
    constructor(client) {
        super(client, {directory: "./schedulers/"});
        super.load();
    }
    initializeCronJob(scheduler) {
        new cron.CronJob({
            cronTime: scheduler.cronTime,
            onTick: scheduler.exec,
            start: true,
            unrefTimeout: true,
        });
    }
    initializeModule(scheduler) {
        super.initializeModule(scheduler);
        this.initializeCronJob(scheduler);
        return scheduler;
    }
}
exports.default = SchedulerModuleManager;
//# sourceMappingURL=SchedulerModuleManager.js.map
