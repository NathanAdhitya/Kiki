import KikiClient from "./client/KikiClient";
import KikiModuleManagerEvent from "./KikiModuleManagerEvent";
import KikiStructureManager, { ExtendableStructureNames, ExtendableStructures } from "./KikiStructureManager";
import InterruptModule from "./interrupters/InterruptModule";
import ListenerModule from "./listeners/ListenerModule";
import MonitorModule from "./monitors/MonitorModule";
import CommandModule from "./commands/CommandModule";
import SchedulerModule from "./schedulers/SchedulerModule";
import ShardingManager from "./shard/ShardingManager";
import * as Constants from "./utils/Constants";
import { Shard, ShardClientUtil, WebhookClient, Collection, Permissions, Snowflake, SnowflakeUtil, Util } from "discord.js";
import { Options as ArgumentParserOptions, Arguments as CommandArguments } from "yargs-parser";
export { KikiClient as Client, KikiModuleManagerEvent as ModuleManagerEvent, KikiStructureManager as StructureManager, ExtendableStructureNames, ExtendableStructures, InterruptModule as Interrupt, ListenerModule as Listener, MonitorModule as Monitor, CommandModule as Command, SchedulerModule as Scheduler, Constants, Shard, ShardClientUtil, ShardingManager, WebhookClient, Collection, Permissions, Snowflake, SnowflakeUtil, Util, ArgumentParserOptions, CommandArguments, };
//# sourceMappingURL=Kiki.d.ts.map