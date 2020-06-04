import {EventEmitter} from "events";

import KikiClient from "./client/KikiClient";
import KikiModuleManager from "./KikiModuleManager";

/** Base class for Modules in Kiki. */
abstract class KikiModule extends EventEmitter {
    /** The name of this module. */
    public name: string;
    /** The category of this module. */
    public category: string;
    /** The Kiki client in which this module was loaded. */
    public client: KikiClient;
    /** The module manager that manages this module. */
    public manager: KikiModuleManager;

    constructor(name: string) {
        super();

        this.name = name;
        this.client = null;
        this.manager = null;
    }

    /** The method that'll be executed when this module runs. */
    public abstract exec(...args: unknown[]): Promise<unknown>;

    public toString(): string {
        return this.name;
    }
}

export default KikiModule;
