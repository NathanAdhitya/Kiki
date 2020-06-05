/* eslint-disable camelcase */
"use strict";
Object.defineProperty(exports, "__esModule", {value: true});
const KikiModule_1 = require("../KikiModule");
class MonitorModule extends KikiModule_1.default {
    constructor(name, options) {
        super(name);
        this.name = name;
        this.event = options.event;
        this.frequency = options.frequency;
    }
}
exports.default = MonitorModule;
//# sourceMappingURL=MonitorModule.js.map
