import {EventEmitter} from "events";
import {Collection} from "discord.js";

import KikiClient from "../client/KikiClient";
import KikiModuleManager from "../KikiModuleManager";
import ListenerModule from "./ListenerModule";
import {LISTENER_MODE} from "../utils/Constants";
import KikiError from "../errors/KikiError";


/**
 * Listener Module Manager loads listeners and attaches them to their
 * respective EventEmitters.
 */
class ListenerModuleManager extends KikiModuleManager {
    /** A collection of event emitters for use by the listeners. */
    emitters: Collection<string, EventEmitter>;

    constructor(client: KikiClient) {
        super(client, {directory: "./listeners/"});

        this.emitters = new Collection();
        this.emitters.set("Kiki", this.client);

        super.load();
    }

    /** Initializes the emitter and attaches the listener to its EventEmitter. */
    protected attachListener(listener: ListenerModule): void {
        if (typeof listener.emitter === "string") {
            listener.emitter = this.emitters.get(listener.emitter);
        }

        switch (listener.mode) {
        case LISTENER_MODE.ON:
            listener.emitter.on(listener.name, listener.exec);
            break;

        case LISTENER_MODE.ONCE:
            listener.emitter.once(listener.name, listener.exec);
            break;

        default:
            throw new KikiError(`The 'mode' of the listener class '${listener.constructor.name}' must be either '0' or '1'.`);
        }
    }

    /** Initializes the event listener. */
    protected initializeModule(listener: ListenerModule): ListenerModule {
        super.initializeModule(listener);

        this.attachListener(listener);

        return listener;
    }
}


export default ListenerModuleManager;
