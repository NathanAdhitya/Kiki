"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WebhookHandler = void 0;
const discord_js_1 = require("discord.js");
class WebhookHandler {
    constructor(webhooks) {
        if (!webhooks)
            return null;
        this.webhooks = [];
        for (const hook of Object.keys(webhooks)) {
            this.webhooks.push(hook);
            const webhookCredentials = webhooks[hook].split("/").slice(-2);
            this[hook] = {
                url: webhooks[hook],
                id: webhookCredentials[0],
                token: webhookCredentials[1],
                client: new discord_js_1.WebhookClient(webhookCredentials[0], webhookCredentials[1]),
            };
        }
    }
    send(webhook, content) {
        if (this.webhooks && this.webhooks.includes(webhook)) {
            if (content) {
                this[webhook].client.send(content).catch(() => {
                    return;
                });
            }
        }
    }
}
exports.WebhookHandler = WebhookHandler;
//# sourceMappingURL=KikiWebhook.js.map