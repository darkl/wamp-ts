interface IDealerProxy {
    invocationError(request: number, details: any, error: string, argumentsArray?: any[], argumentsKw?: any): void;
    call(request: number, options: ICallOptions, procedure: string, argumentsArray?: any[], argumentsKw?: any): void;
    cancel(request: number, options: any): void;
    register(request: number, options: IRegisterOptions, procedure: string): void;
    unregister(request: number, registration: number): void;
    yield(request: number, options: IYieldOptions, argumentsArray?: any[], argumentsKw?: any): void;
}