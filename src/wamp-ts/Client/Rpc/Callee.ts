class Callee implements ICallee {
    private _dealer: IDealerProxy;

    constructor(dealer : IDealerProxy) {
        this._dealer = dealer;
    }

    registered(request: number, registration: number): void {}

    registerError(request: number, details: any, error: string, argumentsArray?: any[], argumentsKw?: any): void {}

    unregistered(request: number): void {}

    unregisterError(request: number, details: any, error: string, argumentsArray?: any[], argumentsKw?: any): void {}

    invocation(request: number, registration: number, details: IInvocationDetails, argumentsArray?: any[], argumentsKw?: any): void {}

    interrupt(request: number, options: any): void {}
}