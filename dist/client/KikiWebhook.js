"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_1 = require("discord.js");
class WebhookHandler {
    constructor(client) {
        const webhooks = client.credentials.webhooks;
        console.log(webhooks);
        if (!webhooks)
            return null;
        this.webhooks = [];
        this.client = client;
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
                this[webhook].client.send(content instanceof String ? content : {
                    embeds: content instanceof Array ? content : [content],
                }).catch((e) => {
                    this.client.log.error("An error orcurred during sending a webhook!");
                    this.client.log.error(e);
                    return;
                });
            }
        }
    }
}
exports.default = WebhookHandler;
//# sourceMappingURL=KikiWebhook.js.map