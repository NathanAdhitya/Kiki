"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const KikiModule_1 = require("../KikiModule");
class CommandModule extends KikiModule_1.default {
    constructor(name, options = {}) {
        super(name);
        this.name = name;
        this.description = options.description || "";
        this.triggers = options.triggers || [name];
        this.arguments = options.arguments || {};
        this.owner = options.owner || false;
        this.typing = options.typing || false;
        this.cooldown = options.cooldown || 0;
        this.ratelimit = options.ratelimit || 1;
        this.clientPermissions = options.clientPermissions || [];
        this.userPermissions = options.userPermissions || [];
        this.condition = options.condition ? options.condition.bind(this) : () => true;
    }
}
exports.default = CommandModule;
//# sourceMappingURL=CommandModule.js.map