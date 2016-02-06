import * as Core from "../../Core";

export class Subscriber implements Core.ISubscriber {
    private _broker: Core.IBrokerProxy;

    constructor(broker: Core.IBrokerProxy) {
        this._broker = broker;
    }

    subscribed(request: number, subscription: number): void {}

    subscribeError(request: number, details: any, error: string, argumentsArray?: any[], argumentsKw?: any): void {}

    unsubscribed(request: number): void {}

    unsubscribeError(request: number, details: any, error: string, argumentsArray?: any[], argumentsKw?: any): void {}

    event(subscription: number, publication: number, details: Core.IEventDetails, argumentsArray?: any[], argumentsKw?: any): void {}
}