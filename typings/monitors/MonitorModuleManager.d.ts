/*!
 * @file KikiMonitor Module Manager Class
 * @author Erei Development Team
 */

import KikiClient from "../client/KikiClient";
import KikiModuleManager from "../KikiModuleManager";
declare class MonitorModuleManager extends KikiModuleManager {
    constructor(client: KikiClient);
    load(): void;
}
export default MonitorModuleManager;
//# sourceMappingURL=MonitorModuleManager.d.ts.map