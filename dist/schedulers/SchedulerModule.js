/* eslint-disable camelcase */
"use strict";
Object.defineProperty(exports, "__esModule", {value: true});
const KikiModule_1 = require("../KikiModule");
class SchedulerModule extends KikiModule_1.default {
    constructor(name, options) {
        super(name);
        this.cronTime = options.cronTime;
    }
}
exports.default = SchedulerModule;
//# sourceMappingURL=SchedulerModule.js.map
