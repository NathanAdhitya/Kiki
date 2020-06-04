"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const KikiModule_1 = require("../KikiModule");
const Constants_1 = require("../utils/Constants");
class ListenerModule extends KikiModule_1.default {
    constructor(name, options = {}) {
        super(name);
        this.emitter = options.emitter || "Kiki";
        this.mode = options.mode || Constants_1.LISTENER_MODE.ON;
    }
}
exports.default = ListenerModule;
//# sourceMappingURL=ListenerModule.js.map