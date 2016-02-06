import * as Core from "../../Core";

export class SessionClient implements Core.ISessionClient {
    private _realm : string;
    private _connection: Core.IWampConnection;
    private _sessionRouter: Core.ISessionRouterProxy;

    constructor(realm: string, sessionRouter: Core.ISessionRouterProxy, connection: Core.IControlledWampConnection) {
        this._realm = realm;
        this._connection = connection;
        this._sessionRouter = sessionRouter;
    }

    connect(): void {
        this._sessionRouter.hello(this._realm, <Core.IHelloDetails>{});
    }

    welcome(session: number, details: Core.IWelcomeDetails): void {}

    abort(details: Core.IAbortDetails, reason: string): void {}

    challenge(authMethod: string, extra: any): void {}

    goodbye(details: Core.IGoodbyeDetails, reason: string): void {}
}