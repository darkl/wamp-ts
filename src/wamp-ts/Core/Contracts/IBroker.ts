interface IBroker {
    publish(clientProxy: IWampClientProxy, request: number, options: IPublishOptions, topic: string, argumentsArray?: any[], argumentsKw?: any): void;
    subscribe(clientProxy: IWampClientProxy, request: number, options: ISubscribeOptions, topic: string): void;
    unsubscribe(clientProxy: IWampClientProxy, request: number, subscription: number): void;
}