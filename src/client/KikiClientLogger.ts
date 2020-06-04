import * as chalk from "chalk";

import KikiClient from "./KikiClient";


/**
 * Logger class to help with Kiki Client with logging.
 */
export default class KikiClientLogger {
    /** The client this logger belongs to. */
    public client: KikiClient;

    constructor(client: KikiClient) {
        this.client = client;
    }

    /** Used to display errors. */
    public error(...message: unknown[]): void {
        console.info(chalk`{red [ERROR} {gray ${new Date()}}{red ]}`);
        console.error(...message);
        console.trace();
        console.info(chalk`{red [ERROR]}`);
    }

    /** Used to display info messages. */
    public info(...message: unknown[]): void {
        console.info(chalk`{gray ${new Date()}}`, ...message);
    }

    /** Used to display messages from the client. */
    public message(...message: unknown[]): void {
        const username = this.client.user ? this.client.user.username : "BOT";

        console.info(chalk.gray(new Date()));
        console.info(chalk`{cyan [${username}]:}`, ...message);
    }

    /** Used to display warnings. */
    public warn(...message: unknown[]): void {
        console.info(chalk`{yellow [WARNING} {gray ${new Date()}}{yellow ]}`);
        console.warn(...message);
        console.trace();
        console.info(chalk`{yellow [WARNING]}`);
    }
}
