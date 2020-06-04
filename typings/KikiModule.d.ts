/// <reference types="node" />
import { EventEmitter } from "events";
import KikiClient from "./client/KikiClient";
import KikiModuleManager from "./KikiModuleManager";
declare abstract class KikiModule extends EventEmitter {
    name: string;
    category: string;
    client: KikiClient;
    manager: KikiModuleManager;
    constructor(name: string);
    abstract exec(...args: unknown[]): Promise<unknown>;
    toString(): string;
}
export default KikiModule;
//# sourceMappingURL=KikiModule.d.ts.map