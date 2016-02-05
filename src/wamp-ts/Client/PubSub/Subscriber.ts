class Subscriber implements ISubscriber {
    private _broker: IBrokerProxy;

    constructor(broker: IBrokerProxy) {
        this._broker = broker;
    }

    subscribed(request: number, subscription: number): void {}

    subscribeError(request: number, details: any, error: string, argumentsArray?: any[], argumentsKw?: any): void {}

    unsubscribed(request: number): void {}

    unsubscribeError(request: number, details: any, error: string, argumentsArray?: any[], argumentsKw?: any): void {}

    event(subscription: number, publication: number, details: IEventDetails, argumentsArray?: any[], argumentsKw?: any): void {}
}