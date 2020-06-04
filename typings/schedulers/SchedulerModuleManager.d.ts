import KikiClient from "../client/KikiClient";
import KikiModuleManager from "../KikiModuleManager";
import SchedulerModule from "./SchedulerModule";
declare class SchedulerModuleManager extends KikiModuleManager {
    constructor(client: KikiClient);
    protected initializeCronJob(scheduler: SchedulerModule): void;
    protected initializeModule(scheduler: SchedulerModule): SchedulerModule;
}
export default SchedulerModuleManager;
//# sourceMappingURL=SchedulerModuleManager.d.ts.map