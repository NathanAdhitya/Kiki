﻿"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require("fs");
const path = require("path");
const events_1 = require("events");
const discord_js_1 = require("discord.js");
const walkDirectory_1 = require("./utils/walkDirectory");
class KikiModuleManager extends events_1.EventEmitter {
    constructor(client, options) {
        super();
        this.client = client;
        this.directory = options.directory;
        this.modules = new discord_js_1.Collection();
        this.attachListeners();
    }
    resolveModules(moduleDirectory) {
        const files = walkDirectory_1.default(moduleDirectory);
        return files.filter((file) => __filename.endsWith(".ts") ? file.endsWith(".ts") : file.endsWith(".js"));
    }
    attachListeners() {
        const eventsDirectory = path.resolve(path.join(this.client.baseDir, "./events"));
        if (fs.existsSync(eventsDirectory)) {
            const files = this.resolveModules(eventsDirectory);
            for (const file of files) {
                const event = new (require(file))();
                this.on(event.name, event.exec);
            }
        }
    }
    storeModule(module) {
        this.modules.set(module.name.toLowerCase(), module);
    }
    initializeModule(module, category) {
        module.category = category;
        module.client = this.client;
        module.manager = this;
        module.exec = module.exec.bind(module);
        return module;
    }
    loadModule(file, category) {
        const module = new (require(file))();
        this.initializeModule(module, category);
        this.storeModule(module);
        return module;
    }
    load() {
        const moduleDirectory = path.resolve(path.join(this.client.baseDir, this.directory));
        if (fs.existsSync(moduleDirectory)) {
            const files = this.resolveModules(moduleDirectory);
            for (const file of files) {
                const moduleCategory = path.dirname(path.relative(moduleDirectory, file));
                this.loadModule(file, moduleCategory === "." ? "" : moduleCategory);
            }
        }
    }
}
exports.default = KikiModuleManager;
//# sourceMappingURL=KikiModuleManager.js.map