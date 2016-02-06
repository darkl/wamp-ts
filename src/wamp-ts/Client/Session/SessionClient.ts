class SessionClient implements ISessionClient {
    private _realm;
    private _connection: IWampConnection;
    private _sessionRouter: ISessionRouterProxy;

    constructor(realm : string, sessionRouter : ISessionRouterProxy, connection: IControlledWampConnection) {
        this._realm = realm;
        this._connection = connection;
        this._sessionRouter = sessionRouter;
    }

    connect(): void {
        this._sessionRouter.hello(this._realm, <IHelloDetails>{});
    }

    welcome(session: number, details: IWelcomeDetails): void {}

    abort(details: IAbortDetails, reason: string): void {}

    challenge(authMethod: string, extra: any): void {}

    goodbye(details: IGoodbyeDetails, reason: string): void {}
}