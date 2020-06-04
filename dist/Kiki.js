﻿"use strict";
/*!
 * @file The starting point of Kiki, exposing the framework.
 * @author Sankarsan Kampa (a.k.a. k3rn31p4nic)
 * @license GPL-3.0
 * @copyright 2018 - The Bastion Bot Project
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.Util = exports.SnowflakeUtil = exports.Permissions = exports.Collection = exports.WebhookClient = exports.ShardingManager = exports.ShardClientUtil = exports.Shard = exports.Constants = exports.Scheduler = exports.Command = exports.Monitor = exports.Listener = exports.Interrupt = exports.StructureManager = exports.ModuleManagerEvent = exports.Client = void 0;
const KikiClient_1 = require("./client/KikiClient");
exports.Client = KikiClient_1.default;
const KikiModuleManagerEvent_1 = require("./KikiModuleManagerEvent");
exports.ModuleManagerEvent = KikiModuleManagerEvent_1.default;
const KikiStructureManager_1 = require("./KikiStructureManager");
exports.StructureManager = KikiStructureManager_1.default;
const InterruptModule_1 = require("./interrupters/InterruptModule");
exports.Interrupt = InterruptModule_1.default;
const ListenerModule_1 = require("./listeners/ListenerModule");
exports.Listener = ListenerModule_1.default;
const MonitorModule_1 = require("./monitors/MonitorModule");
exports.Monitor = MonitorModule_1.default;
const CommandModule_1 = require("./commands/CommandModule");
exports.Command = CommandModule_1.default;
const SchedulerModule_1 = require("./schedulers/SchedulerModule");
exports.Scheduler = SchedulerModule_1.default;
const ShardingManager_1 = require("./shard/ShardingManager");
exports.ShardingManager = ShardingManager_1.default;
const Constants = require("./utils/Constants");
exports.Constants = Constants;
const discord_js_1 = require("discord.js");
Object.defineProperty(exports, "Shard", { enumerable: true, get: function () { return discord_js_1.Shard; } });
Object.defineProperty(exports, "ShardClientUtil", { enumerable: true, get: function () { return discord_js_1.ShardClientUtil; } });
Object.defineProperty(exports, "WebhookClient", { enumerable: true, get: function () { return discord_js_1.WebhookClient; } });
Object.defineProperty(exports, "Collection", { enumerable: true, get: function () { return discord_js_1.Collection; } });
Object.defineProperty(exports, "Permissions", { enumerable: true, get: function () { return discord_js_1.Permissions; } });
Object.defineProperty(exports, "SnowflakeUtil", { enumerable: true, get: function () { return discord_js_1.SnowflakeUtil; } });
Object.defineProperty(exports, "Util", { enumerable: true, get: function () { return discord_js_1.Util; } });
//# sourceMappingURL=Kiki.js.map