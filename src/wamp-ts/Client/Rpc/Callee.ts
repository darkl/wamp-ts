class Callee implements ICallee {
    private _dealer: IDealerProxy;

    constructor(dealer : IDealerProxy) {
        this._dealer = dealer;
    }

    registered(request: number, registration: number): void {}

    registerError(request: number, details, error: string, argumentsArray?: any[], argumentsKw?): void {}

    unregistered(request: number): void {}

    unregisterError(request: number, details, error: string, argumentsArray?: any[], argumentsKw?): void {}

    invocation(request: number, registration: number, details: IInvocationDetails, argumentsArray?: any[], argumentsKw?): void {}

    interrupt(request: number, options): void {}
}