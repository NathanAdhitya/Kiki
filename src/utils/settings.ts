import * as fs from "fs";
import * as path from "path";
import * as YAML from "yaml";

export interface KikiConfigurations {
    prefixes: string[];
}

export interface KikiCredentials {
    owners: string[];
    token: string;
    datastore?: {
        uri: string;
    };
}


/**
 * Parses the provided YAML file in the settings directory and caches them in
 * the client.
 */
const loadFile = (file: string, directory = path.resolve("./settings/")): KikiConfigurations & KikiCredentials => {
    const filePath = path.join(directory, file + ".yaml");
    const settings = fs.readFileSync(filePath, "utf8");

    return YAML.parse(settings);
};


/**
 * Loads the configurations file from the settings directory and returns it.
 */
export const getConfigurations = (): KikiConfigurations => {
    return loadFile("configurations");
};

/**
 * Loads the credentials files from the settings directory and returns it.
 */
export const getCredentials = (): KikiCredentials => {
    return loadFile("credentials");
};
