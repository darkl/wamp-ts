interface ISessionRouter {
    hello(clientProxy: IWampClientProxy, realm: string, details: IHelloDetails): void;
    abort(clientProxy: IWampClientProxy, details: IAbortDetails, reason: string): void;
    authenticate(clientProxy: IWampClientProxy, signature: string, extra: any): void;
    goodbye(clientProxy: IWampClientProxy, details: IGoodbyeDetails, reason: string): void;
}