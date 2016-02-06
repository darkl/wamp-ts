class WampChannel {
    private _subscriber: Subscriber;
    private _publisher: Publisher;
    private _callee: Callee;
    private _caller: Caller;
    private _session: SessionClient;
    private _proxy: WampRouterProxy;
    private _incomingMessageHandler: WampClientIncomingMessageHandler;
    private _connection: IControlledWampConnection;
    private _realm: string;

    constructor(connection: IControlledWampConnection, realm: string) {
        this._connection = connection;

        var outgoingMessageHandler: IWampOutgoingMessageHandler =
            new WampOutgoingMessageHandler(connection);

        this._proxy = new WampRouterProxy(outgoingMessageHandler);

        this._session = new SessionClient(realm, this._proxy, this._connection);
        this._caller = new Caller(this._proxy);
        this._callee = new Callee(this._proxy);
        this._publisher = new Publisher(this._proxy);
        this._subscriber = new Subscriber(this._proxy);

        this._incomingMessageHandler =
            new WampClientIncomingMessageHandler(this._session,
                this._caller,
                this._callee,
                this._publisher,
                this._subscriber);
    }
}