import * as Core from "../../Core";

export class Callee implements Core.ICallee {
    private _dealer: Core.IDealerProxy;

    constructor(dealer: Core.IDealerProxy) {
        this._dealer = dealer;
    }

    registered(request: number, registration: number): void {}

    registerError(request: number, details: any, error: string, argumentsArray?: any[], argumentsKw?: any): void {}

    unregistered(request: number): void {}

    unregisterError(request: number, details: any, error: string, argumentsArray?: any[], argumentsKw?: any): void {}

    invocation(request: number, registration: number, details: Core.IInvocationDetails, argumentsArray?: any[], argumentsKw?: any): void {}

    interrupt(request: number, options: any): void {}
}