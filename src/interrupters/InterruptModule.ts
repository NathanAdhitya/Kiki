import KikiModule from "../KikiModule";


/**
 * Abstract class for creating Kiki interrupts.
 */
abstract class InterruptModule extends KikiModule {
    constructor(name: string) {
        super(name);

        this.name = name;
    }

    public abstract exec(...args: unknown[]): Promise<boolean>;
}


export default InterruptModule;
