"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const KikiModuleManager_1 = require("../KikiModuleManager");
class InterruptModuleManager extends KikiModuleManager_1.default {
    constructor(client) {
        super(client, { directory: "./interrupts/" });
        super.load();
    }
}
exports.default = InterruptModuleManager;
//# sourceMappingURL=InterruptModuleManager.js.map