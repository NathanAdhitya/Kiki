import KikiModule from "../KikiModule";


interface SchedulerModuleOptions {
    /** The cron time expression that represents when to schedule this. */
    cronTime: string;
}

/**
 * Abstract class for creating Kiki schedulers.
 */
abstract class SchedulerModule extends KikiModule {
    /** The cron time expression that represents when to schedule this. */
    public cronTime: string;

    constructor(name: string, options: SchedulerModuleOptions) {
        super(name);

        this.cronTime = options.cronTime;
    }

    public abstract exec(...args: unknown[]): Promise<unknown>;
}


export default SchedulerModule;
