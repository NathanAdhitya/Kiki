import { ShardingManager, ShardingManagerMode } from "discord.js";
interface ShardingManagerOptions {
    totalShards?: number | "auto";
    shardList?: number[] | "auto";
    mode?: ShardingManagerMode;
    respawn?: boolean;
    shardArgs?: string[];
    token?: string;
    execArgv?: string[];
}
declare class KikiShardingManager extends ShardingManager {
    constructor(file: string, options?: ShardingManagerOptions);
}
export default KikiShardingManager;
//# sourceMappingURL=ShardingManager.d.ts.map