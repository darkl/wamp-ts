interface IDealer {
    error(clientProxy: IWampClientProxy, type: number, request: number, details: any, error: string, argumentsArray?: any[], argumentsKw?: any): void;
    call(clientProxy: IWampClientProxy, request: number, options: ICallOptions, procedure: string, argumentsArray?: any[], argumentsKw?: any): void;
    cancel(clientProxy: IWampClientProxy, request: number, options: any): void;
    register(clientProxy: IWampClientProxy, request: number, options: IRegisterOptions, procedure: string): void;
    unregister(clientProxy: IWampClientProxy, request: number, registration: number): void;
    yield(clientProxy: IWampClientProxy, request: number, options: IYieldOptions, argumentsArray?: any[], argumentsKw?: any): void;
}