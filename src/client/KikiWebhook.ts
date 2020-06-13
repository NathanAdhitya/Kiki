/**
 * @file Manages webhook related stuff
 */

import {WebhookClient, MessageEmbed} from "discord.js";
import KikiClient from "./KikiClient";

export type WebhookSettings = {[name: string]: string};

interface WebhookHandlerHook {
    url: string;
    id: string;
    token: string;
    client: WebhookClient;
}

type sendFunction = (webhook: string, content: string | number | MessageEmbed | Array<MessageEmbed>) => void;

class WebhookHandler {
    public client: KikiClient;
    public webhooks: Array<string>;
    [hook: string]: WebhookHandlerHook | Array<string> | sendFunction | KikiClient;

    /**
   * Handles the webhooks sent by Hinako.
   * @constructor
   * @param {KikiClient} client The webhooks object in the `credentials.yaml` file.
   */
    constructor(client: KikiClient) {
        const webhooks = client.credentials.webhooks;
        if (!webhooks) return null;
        this.webhooks = [];
        this.client = client;
        for (const hook of Object.keys(webhooks)) {
            this.webhooks.push(hook);
            const webhookCredentials = webhooks[hook].split("/").slice(-2);
            this[hook] = {
                url: webhooks[hook],
                id: webhookCredentials[0],
                token: webhookCredentials[1],
                client: new WebhookClient(webhookCredentials[0], webhookCredentials[1]),
            };
        }
    }

    /**
   * Sends the specified message as a webhook to the specified webhook channel.
   * @function send
   * @param {String} webhook The name of the webhook where the message is to be sent.
   * @param {String | MessageEmbed | MessageEmbed[]} content The message content to send with the webhook. A string, number or Discord.js embed object.
   * @returns {void}
   */
    public send(webhook: string, content: string | MessageEmbed | MessageEmbed[]): void {
        if (this.webhooks && this.webhooks.includes(webhook)) {
            if (content) {
                (this[webhook] as WebhookHandlerHook).client.send(content instanceof String ? content : {
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

export default WebhookHandler;
