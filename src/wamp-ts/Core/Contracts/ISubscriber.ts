interface ISubscriber {
    subscribed(request: number, subscription: number): void;
    subscribeError(request: number, details: any, error: string, argumentsArray?: any[], argumentsKw?: any): void;
    unsubscribed(request: number): void;
    unsubscribeError(request: number, details: any, error: string, argumentsArray?: any[], argumentsKw?: any): void;
    event(subscription: number, publication: number, details: IEventDetails, argumentsArray?: any[], argumentsKw?: any): void;
}