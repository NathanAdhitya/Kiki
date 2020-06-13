import { WebhookClient, MessageEmbed } from "discord.js";
import KikiClient from "./KikiClient";
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
declare class WebhookHandler {
    client: KikiClient;
    webhooks: Array<string>;
    [hook: string]: WebhookHandlerHook | Array<string> | sendFunction | KikiClient;
    constructor(client: KikiClient);
    send(webhook: string, content: string | MessageEmbed | MessageEmbed[]): void;
}
export default WebhookHandler;
//# sourceMappingURL=KikiWebhook.d.ts.map