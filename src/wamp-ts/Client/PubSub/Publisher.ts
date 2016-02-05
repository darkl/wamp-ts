class Publisher implements IPublisher {
    private _broker: IBrokerProxy;

    constructor(broker: IBrokerProxy) {
        this._broker = broker;
    }

    published(request: number, publication: number): void { }

    publishError(request: number, details: any, error: string, argumentsArray?: any[], argumentsKw?: any): void {}
}