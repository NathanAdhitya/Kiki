/**
 * Base class for errors in Kiki.
 */
class KikiError extends Error {
    constructor(message?: string) {
        super(message);
    }

    public get name(): string {
        return this.constructor.name;
    }
}

export default KikiError;
