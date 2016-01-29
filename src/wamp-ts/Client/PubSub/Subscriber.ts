class Subscriber implements ISubscriber  {
    private _broker: IBrokerProxy;

    constructor(broker : IBrokerProxy) {
        this._broker = broker;
    }

    subscribed(request: number, subscription: number): void { }

    subscribeError(request: number, details, error: string, argumentsArray?: any[], argumentsKw?): void {}

    unsubscribed(request: number): void {}

    unsubscribeError(request: number, details, error: string, argumentsArray?: any[], argumentsKw?): void {}

    event(subscription: number, publication: number, details: IEventDetails, argumentsArray?: any[], argumentsKw?): void {}
}