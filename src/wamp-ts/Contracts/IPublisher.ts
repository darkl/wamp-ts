interface IPublisher {
    published(request: number, publication: number): void;
    publishError(request: number, details: any, error: string, argumentsArray?: any[], argumentsKw?: any): void;
}