import * as Core from "../Core";

import {SessionClient} from "./Session/SessionClient";
import {Callee} from "./Rpc/Callee";
import {Caller} from "./Rpc/Caller";
import {Subscriber} from "./PubSub/Subscriber";
import {Publisher} from "./PubSub/Publisher";

export class WampChannel {
    private _subscriber: Subscriber;
    private _publisher: Publisher;
    private _callee: Callee;
    private _caller: Caller;
    private _session: SessionClient;
    private _proxy: Core.WampRouterProxy;
    private _incomingMessageHandler: Core.WampClientIncomingMessageHandler;
    private _connection: Core.IControlledWampConnection;
    private _realm: string;

    constructor(connection: Core.IControlledWampConnection, realm: string) {
        this._connection = connection;

        var outgoingMessageHandler: Core.WampOutgoingMessageHandler =
            new Core.WampOutgoingMessageHandler(connection);

        this._proxy = new Core.WampRouterProxy(outgoingMessageHandler);

        this._session = new SessionClient(realm, this._proxy, this._connection);
        this._caller = new Caller(this._proxy);
        this._callee = new Callee(this._proxy);
        this._publisher = new Publisher(this._proxy);
        this._subscriber = new Subscriber(this._proxy);

        this._incomingMessageHandler =
            new Core.WampClientIncomingMessageHandler(this._session,
                this._caller,
                this._callee,
                this._publisher,
                this._subscriber);
    }
}