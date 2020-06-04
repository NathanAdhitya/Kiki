/// <reference types="node" />
import {EventEmitter} from "events";
import {Collection} from "discord.js";
import KikiClient from "./client/KikiClient";
import KikiModule from "./KikiModule";
interface KikiModuleManagerOptions {
    directory: string;
}
declare abstract class KikiModuleManager extends EventEmitter {
    client: KikiClient;
    directory: string;
    modules: Collection<string, KikiModule>;
    constructor(client: KikiClient, options: KikiModuleManagerOptions);
    private resolveModules;
    private attachListeners;
    protected storeModule(module: KikiModule): void;
    protected initializeModule(module: KikiModule, category?: string): KikiModule;
    protected loadModule(file: string, category?: string): KikiModule;
    load(): void;
}
export default KikiModuleManager;
//# sourceMappingURL=KikiModuleManager.d.ts.map
