import * as Core from "../../Core";

export class SessionClient implements Core.ISessionClient {
    private _openPromise: Core.TaskCompletionSource<void>;
    private _realm: string;
    private _connection: Core.IControlledWampConnection;
    private _sessionRouter: Core.ISessionRouterProxy;

    constructor(realm: string, sessionRouter: Core.ISessionRouterProxy, connection: Core.IControlledWampConnection) {
        this._realm = realm;
        this._connection = connection;
        this._sessionRouter = sessionRouter;
    }

    open(): Promise<void> {
        this._connection.open();

        this._connection.onopen = (ev: Event) => {
            this._sessionRouter.hello(this._realm, <Core.IHelloDetails>{
                roles : {
                    subscriber: {}
                }
            });
        };

        this._openPromise = new Core.TaskCompletionSource<void>();

        return this._openPromise.promise;
    }

    welcome(session: number, details: Core.IWelcomeDetails): void {
        this._openPromise.resolve();
        console.log({ session, details });
    }

    abort(details: Core.IAbortDetails, reason: string): void { }

    challenge(authMethod: string, extra: any): void { }

    goodbye(details: Core.IGoodbyeDetails, reason: string): void { }

}