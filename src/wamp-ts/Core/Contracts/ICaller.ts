interface ICaller {
    callError(request: number, details: any, error: string, argumentsArray?: any[], argumentsKw?: any): void;
    result(request: number, details: IResultDetails, argumentsArray?: any[], argumentsKw?: any): void;
}