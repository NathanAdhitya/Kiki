import * as fs from "fs";
import * as path from "path";
import {EventEmitter} from "events";
import {Collection} from "discord.js";

import KikiClient from "./client/KikiClient";
import KikiModule from "./KikiModule";
import KikiModuleManagerEvent from "./KikiModuleManagerEvent";
import walkDirectory from "./utils/walkDirectory";


interface KikiModuleManagerOptions {
    /** Path to the directory which contains the modules managed by this manager. */
    directory: string;
}

/** Base class for Modules Manager in Kiki. */
abstract class KikiModuleManager extends EventEmitter {
    /** The Kiki client in which this module manager will manage modules. */
    client: KikiClient;
    /** Path to the directory which contains the modules managed by this manager. */
    directory: string;
    /** A collection of the modules managed by this manager. */
    modules: Collection<string, KikiModule>;

    constructor(client: KikiClient, options: KikiModuleManagerOptions) {
        super();

        this.client = client;
        this.directory = options.directory;
        this.modules = new Collection();

        this.attachListeners();
    }

    /** Returns the path of all the modules in the specified directory. */
    private resolveModules(moduleDirectory: string): string[] {
        const files: string[] = walkDirectory(moduleDirectory);
        return files.filter((file) => __filename.endsWith(".ts") ? file.endsWith(".ts") : file.endsWith(".js"));
    }

    /** Attach Kiki Module Manager events' listeners to their respective manager. */
    private attachListeners(): void {
        const eventsDirectory: string = path.resolve(path.join(this.client.baseDir, "./events"));

        if (fs.existsSync(eventsDirectory)) {
            const files: string[] = this.resolveModules(eventsDirectory);

            for (const file of files) {
                const event: KikiModuleManagerEvent = new (require(file))();
                this.on(event.name, event.exec);
            }
        }
    }

    /** Stores the module in the manager's collection. */
    protected storeModule(module: KikiModule): void {
        this.modules.set(module.name.toLowerCase(), module);
    }

    /**
     * Assigns the client & manager properties and binds the `exec` method of the
     * specified module.
     */
    protected initializeModule(module: KikiModule, category?: string): KikiModule {
        module.category = category;
        module.client = this.client;
        module.manager = this;
        module.exec = module.exec.bind(module);

        return module;
    }

    /** Loads the module from the specified file path. */
    protected loadModule(file: string, category?: string): KikiModule {
        try {
            const module: KikiModule = new (require(file))();
            this.initializeModule(module, category);
            this.storeModule(module);

            return module;
        } catch (e) {
            this.client.log.error(`An error occurred while loading ${file}.`);
            this.client.log.error(e);
        }
    }

    /** Loads all the modules that'll be managed by this manager. */
    public load(): void {
        const moduleDirectory: string = path.resolve(path.join(this.client.baseDir, this.directory));

        if (fs.existsSync(moduleDirectory)) {
            const files: string[] = this.resolveModules(moduleDirectory);

            for (const file of files) {
                const moduleCategory: string = path.dirname(path.relative(moduleDirectory, file));
                this.loadModule(file, moduleCategory === "." ? "" : moduleCategory);
            }
        }
    }
}

export default KikiModuleManager;
