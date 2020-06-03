/**
 * Abstract class for creating Kiki Module Managers' event listeners.
 */
abstract class KikiModuleManagerEvent {
    /** The name of event this will listen to. */
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    public abstract exec(...args: unknown[]): Promise<unknown>;
}


export default KikiModuleManagerEvent;
