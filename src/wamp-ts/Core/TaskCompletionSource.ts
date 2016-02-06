export class TaskCompletionSource<T> {
    private _promise: Promise<T>;
    private _resolve: (result: T) => void;
    private _reject: (error: any) => void;

    constructor() {
        this._promise = new Promise<T>((resolve: (result: T) => void, reject: (error: any) => void) => {
            this._resolve = resolve;
            this._reject = reject;
        });
    }

    resolve(result?: T): void {
        this._resolve(result);
    }

    reject(error: any): void {
        this._reject(error);
    }

    get promise(): Promise<T> {
        return this._promise;
    }
}