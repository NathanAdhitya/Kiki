/*!
 * @file KikiMonitor Module Class
 * @author Erei Development Team
 */

import KikiModule from "../KikiModule";
interface MonitorModuleOptions {
    event: string;
    frequency: number;
}
declare abstract class MonitorModule extends KikiModule {
    event: string;
    frequency: number;
    constructor(name: string, options: MonitorModuleOptions);
    abstract exec(...args: unknown[]): Promise<unknown>;
}
export default MonitorModule;
//# sourceMappingURL=MonitorModule.d.ts.map