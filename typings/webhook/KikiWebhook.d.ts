import { WebhookClient, MessageEmbed } from "discord.js";
export declare type WebhookSettings = {
    [name: string]: string;
};
interface WebhookHandlerHook {
    url: string;
    id: string;
    token: string;
    client: WebhookClient;
}
declare type sendFunction = (webhook: string, content: string | number | MessageEmbed | Array<MessageEmbed>) => void;
export declare class WebhookHandler {
    private webhooks;
    [hook: string]: WebhookHandlerHook | Array<string> | sendFunction;
    constructor(webhooks: WebhookSettings);
    send(webhook: string, content: string | number | MessageEmbed | Array<MessageEmbed>): void;
}
export {};
//# sourceMappingURL=KikiWebhook.d.ts.map