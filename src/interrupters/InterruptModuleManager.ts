import KikiClient from "../client/KikiClient";
import KikiModuleManager from "../KikiModuleManager";


/**
 * Interrupt Module Manager loads interrupts.
 */
class InterruptModuleManager extends KikiModuleManager {
    constructor(client: KikiClient) {
        super(client, {directory: "./interrupts/"});

        super.load();
    }
}


export default InterruptModuleManager;
