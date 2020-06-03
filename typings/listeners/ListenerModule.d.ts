/*!
 * @file KikiListener Module Class
 * @author Erei Development Team
 */
/// <reference types="node" />

import { EventEmitter } from "events";
import KikiModule from "../KikiModule";
import { LISTENER_MODE } from "../utils/Constants";
interface ListenerModuleOptions {
    emitter?: EventEmitter | string;
    mode?: LISTENER_MODE;
}
declare abstract class ListenerModule extends KikiModule {
    emitter: EventEmitter | string;
    mode: LISTENER_MODE;
    constructor(name: string, options?: ListenerModuleOptions);
    abstract exec(...args: unknown[]): Promise<unknown>;
}
export default ListenerModule;
//# sourceMappingURL=ListenerModule.d.ts.map