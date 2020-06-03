/*!
 * @file KikiClient Logger Class
 * @author Erei Development Team
 */

import KikiClient from "./KikiClient";
export default class KikiClientLogger {
    client: KikiClient;
    constructor(client: KikiClient);
    error: (...message: unknown[]) => void;
    info: (...message: unknown[]) => void;
    message: (...message: unknown[]) => void;
    warn: (...message: unknown[]) => void;
}
//# sourceMappingURL=KikiClientLogger.d.ts.map