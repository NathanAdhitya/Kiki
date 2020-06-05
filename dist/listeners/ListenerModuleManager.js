/* eslint-disable camelcase */
"use strict";
Object.defineProperty(exports, "__esModule", {value: true});
const discord_js_1 = require("discord.js");
const KikiModuleManager_1 = require("../KikiModuleManager");
const Constants_1 = require("../utils/Constants");
const KikiError_1 = require("../errors/KikiError");
class ListenerModuleManager extends KikiModuleManager_1.default {
    constructor(client) {
        super(client, {directory: "./listeners/"});
        this.emitters = new discord_js_1.Collection();
        this.emitters.set("Kiki", this.client);
        super.load();
    }
    attachListener(listener) {
        if (typeof listener.emitter === "string") {
            listener.emitter = this.emitters.get(listener.emitter);
        }
        switch (listener.mode) {
        case Constants_1.LISTENER_MODE.ON:
            listener.emitter.on(listener.name, listener.exec);
            break;
        case Constants_1.LISTENER_MODE.ONCE:
            listener.emitter.once(listener.name, listener.exec);
            break;
        default:
            throw new KikiError_1.default(`The 'mode' of the listener class '${listener.constructor.name}' must be either '0' or '1'.`);
        }
    }
    initializeModule(listener) {
        super.initializeModule(listener);
        this.attachListener(listener);
        return listener;
    }
}
exports.default = ListenerModuleManager;
//# sourceMappingURL=ListenerModuleManager.js.map
