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
export declare const getConfigurations: () => KikiConfigurations;
export declare const getCredentials: () => KikiCredentials;
//# sourceMappingURL=settings.d.ts.map
