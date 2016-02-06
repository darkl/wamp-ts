import * as Core from "../../Core";

export class Publisher implements Core.IPublisher {
    private _broker: Core.IBrokerProxy;

    constructor(broker: Core.IBrokerProxy) {
        this._broker = broker;
    }

    published(request: number, publication: number): void { }

    publishError(request: number, details: any, error: string, argumentsArray?: any[], argumentsKw?: any): void {}
}