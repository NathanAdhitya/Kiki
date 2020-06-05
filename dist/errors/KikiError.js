/* eslint-disable camelcase */
"use strict";
Object.defineProperty(exports, "__esModule", {value: true});
class KikiError extends Error {
    constructor(message) {
        super(message);
    }
    get name() {
        return this.constructor.name;
    }
}
exports.default = KikiError;
//# sourceMappingURL=KikiError.js.map
