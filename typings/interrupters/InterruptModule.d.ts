import KikiModule from "../KikiModule";
declare abstract class InterruptModule extends KikiModule {
    constructor(name: string);
    abstract exec(...args: unknown[]): Promise<boolean>;
}
export default InterruptModule;
//# sourceMappingURL=InterruptModule.d.ts.map
