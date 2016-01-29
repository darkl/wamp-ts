interface ISessionRouterProxy {
    hello(realm: string, details: IHelloDetails): void;
    abort(details: IAbortDetails, reason: string): void;
    authenticate(signature: string, extra: any): void;
    goodbye(details: IGoodbyeDetails, reason: string): void;
}