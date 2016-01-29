interface IBrokerProxy {
    publish(request: number, options: IPublishOptions, topic: string, argumentsArray?: any[], argumentsKw?: any): void;
    subscribe(request: number, options: ISubscribeOptions, topic: string): void;
    unsubscribe(request: number, subscription: number): void;
}