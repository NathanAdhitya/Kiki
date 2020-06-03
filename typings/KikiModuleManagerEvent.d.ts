/*!
 * @author Erei Dev Team
 * @copyright 2020 - Erei Dev Team
 */
/// <reference types="node" />
declare abstract class KikiModuleManagerEvent {
    name: string;
    constructor(name: string);
    abstract exec(...args: unknown[]): Promise<unknown>;
}
export default KikiModuleManagerEvent;
//# sourceMappingURL=KikiModuleManagerEvent.d.ts.map