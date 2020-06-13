"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chalk = require("chalk");
const options = { year: "numeric", month: "numeric", day: "numeric", hour: "numeric", minute: "numeric", seconds: "numeric", timeZoneName: "short" };
class KikiClientLogger {
    constructor(client) {
        this.client = client;
    }
    error(...message) {
        console.info(chalk `{red [ERROR} {gray ${new Date().toLocaleDateString(undefined, options)}}{red ]}`);
        console.error(...message);
        console.trace();
        console.info(chalk `{red [ERROR]}`);
    }
    info(...message) {
        console.info(chalk `{gray ${new Date().toLocaleDateString(undefined, options)}}`, ...message);
    }
    message(...message) {
        const username = this.client.user ? this.client.user.username : "BOT";
        console.info(chalk.gray(new Date().toLocaleDateString(undefined, options)));
        console.info(chalk `{cyan [${username}]:}`, ...message);
    }
    warn(...message) {
        console.info(chalk `{yellow [WARNING} {gray ${new Date().toLocaleDateString(undefined, options)}}{yellow ]}`);
        console.warn(...message);
        console.trace();
        console.info(chalk `{yellow [WARNING]}`);
    }
}
exports.default = KikiClientLogger;
//# sourceMappingURL=KikiClientLogger.js.map