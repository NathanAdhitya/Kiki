import KikiClient from "./KikiClient";
export default class KikiClientUtils {
    client: KikiClient;
    constructor(client: KikiClient);
    compressString(string: string): Promise<string>;
    decompressString(string: string): Promise<string>;
}
//# sourceMappingURL=KikiClientUtils.d.ts.map