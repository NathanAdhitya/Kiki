/*!
 * @file KikiListener Module Manager Class
 * @author Erei Development Team
 */
/// <reference types="node" />

import { EventEmitter } from "events";
import { Collection } from "discord.js";
import KikiClient from "../client/KikiClient";
import KikiModuleManager from "../KikiModuleManager";
import ListenerModule from "./ListenerModule";
declare class ListenerModuleManager extends KikiModuleManager {
    emitters: Collection<string, EventEmitter>;
    constructor(client: KikiClient);
    protected attachListener(listener: ListenerModule): void;
    protected initializeModule(listener: ListenerModule): ListenerModule;
}
export default ListenerModuleManager;
//# sourceMappingURL=ListenerModuleManager.d.ts.map