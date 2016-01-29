class Caller implements ICaller {
    private _dealer: IDealerProxy;

    constructor(dealer: IDealerProxy) {
        this._dealer = dealer;
    }

    callError(request: number, details, error: string, argumentsArray?: any[], argumentsKw?): void {}

    result(request: number, details: IResultDetails, argumentsArray?: any[], argumentsKw?): void {}
}