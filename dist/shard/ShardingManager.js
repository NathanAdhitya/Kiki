/* eslint-disable camelcase */
"use strict";
Object.defineProperty(exports, "__esModule", {value: true});
const discord_js_1 = require("discord.js");
const settings = require("../utils/settings");
class KikiShardingManager extends discord_js_1.ShardingManager {
    constructor(file, options) {
        super(file, options);
        const credentials = settings.getCredentials();
        this.token = credentials.token;
    }
}
exports.default = KikiShardingManager;
//# sourceMappingURL=ShardingManager.js.map
