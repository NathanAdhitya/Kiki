/* !
 * @author Sankarsan Kampa (a.k.a. k3rn31p4nic)
 * @copyright 2018 - Sankarsan Kampa
 */
import ShardingManager from "../shard/ShardingManager";
declare class WebServer {
    private manager;
    private requestListener;
    private server;
    constructor(manager: ShardingManager);
    start(port?: string | number): void;
}
export default WebServer;
