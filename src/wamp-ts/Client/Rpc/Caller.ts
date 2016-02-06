import * as Core from "../../Core";

export class Caller implements Core.ICaller {
    private _dealer: Core.IDealerProxy;

    constructor(dealer: Core.IDealerProxy) {
        this._dealer = dealer;
    }

    callError(request: number, details: any, error: string, argumentsArray?: any[], argumentsKw?: any): void { }

    result(request: number, details: Core.IResultDetails, argumentsArray?: any[], argumentsKw?: any): void { }
}