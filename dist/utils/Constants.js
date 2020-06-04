﻿"use strict";
/*!
 * @file Constants Definitions
 * @author Erei Development Team
 * @license GPL-3.0
 * @copyright 2020 - Erei Bot
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.MODULE_EXECUTE_STATUS = exports.MODULE_MANAGER_EVENTS = exports.LISTENER_MODE = exports.ArgumentTypes = exports.discord = void 0;
const discord_js_1 = require("discord.js");
Object.defineProperty(exports, "discord", { enumerable: true, get: function () { return discord_js_1.Constants; } });
const ArgumentTypes = {
    STRING: String,
    UPPERCASE: (arg) => arg.toUpperCase(),
    LOWERCASE: (arg) => arg.toLowerCase(),
    BOOLEAN: (arg) => {
        if (!arg)
            return false;
        if (arg.toLowerCase() === "false" || arg === "0")
            return false;
        return Boolean(arg);
    },
    NUMBER: (arg) => arg && !isNaN(Number(arg)) ? parseFloat(arg) : null,
    INTEGER: (arg) => arg && !isNaN(Number(arg)) ? parseInt(arg) : null,
    BIGINT: (arg) => arg && !isNaN(Number(arg)) ? BigInt(arg) : null,
    URL: (arg) => {
        try {
            return new URL(arg);
        }
        catch {
            return null;
        }
    },
    TIMESTAMP: (arg) => Date.parse(arg + "Z") || null,
    DATE: (arg) => {
        const timestamp = ArgumentTypes.TIMESTAMP(arg);
        if (timestamp && !isNaN(timestamp))
            return new Date(timestamp);
        return null;
    },
    COLOR: (arg) => {
        if (!arg)
            return null;
        const color = parseInt(arg.replace("#", ""), 16);
        if (color < 0 || color > 0xFFFFFF || isNaN(color))
            return null;
        return color;
    },
};
exports.ArgumentTypes = ArgumentTypes;
var LISTENER_MODE;
(function (LISTENER_MODE) {
    LISTENER_MODE[LISTENER_MODE["ON"] = 0] = "ON";
    LISTENER_MODE[LISTENER_MODE["ONCE"] = 1] = "ONCE";
})(LISTENER_MODE || (LISTENER_MODE = {}));
exports.LISTENER_MODE = LISTENER_MODE;
var MODULE_MANAGER_EVENTS;
(function (MODULE_MANAGER_EVENTS) {
    MODULE_MANAGER_EVENTS["COMMAND_MODULE_EXECUTE"] = "commandExecute";
})(MODULE_MANAGER_EVENTS || (MODULE_MANAGER_EVENTS = {}));
exports.MODULE_MANAGER_EVENTS = MODULE_MANAGER_EVENTS;
var MODULE_EXECUTE_STATUS;
(function (MODULE_EXECUTE_STATUS) {
    MODULE_EXECUTE_STATUS["SUCCESS"] = "success";
    MODULE_EXECUTE_STATUS["FAILED"] = "failed";
})(MODULE_EXECUTE_STATUS || (MODULE_EXECUTE_STATUS = {}));
exports.MODULE_EXECUTE_STATUS = MODULE_EXECUTE_STATUS;
//# sourceMappingURL=Constants.js.map