import KikiModule from "../KikiModule";
interface SchedulerModuleOptions {
    cronTime: string;
}
declare abstract class SchedulerModule extends KikiModule {
    cronTime: string;
    constructor(name: string, options: SchedulerModuleOptions);
    abstract exec(...args: unknown[]): Promise<unknown>;
}
export default SchedulerModule;
//# sourceMappingURL=SchedulerModule.d.ts.map