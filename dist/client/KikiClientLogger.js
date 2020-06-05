/* eslint-disable camelcase */
"use strict";
Object.defineProperty(exports, "__esModule", {value: true});
const chalk = require("chalk");
class KikiClientLogger {
    constructor(client) {
        this.client = client;
    }
    error(...message) {
        console.info(chalk `{red [ERROR} {gray ${new Date()}}{red ]}`);
        console.error(...message);
        console.trace();
        console.info(chalk `{red [ERROR]}`);
    }
    info(...message) {
        console.info(chalk `{gray ${new Date()}}`, ...message);
    }
    message(...message) {
        const username = this.client.user ? this.client.user.username : "BOT";
        console.info(chalk.gray(new Date()));
        console.info(chalk `{cyan [${username}]:}`, ...message);
    }
    warn(...message) {
        console.info(chalk `{yellow [WARNING} {gray ${new Date()}}{yellow ]}`);
        console.warn(...message);
        console.trace();
        console.info(chalk `{yellow [WARNING]}`);
    }
}
exports.default = KikiClientLogger;
//# sourceMappingURL=KikiClientLogger.js.map
