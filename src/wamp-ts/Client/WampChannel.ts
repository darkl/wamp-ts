class WampChannel {
    private _proxy: WampRouterProxy;
    private _incomingMessageHandler: WampClientIncomingMessageHandler;
    private _connection: IWampConnection;

    constructor(connection: IWampConnection) {
        this._connection = connection;

        var outgoingMessageHandler: IWampOutgoingMessageHandler =
            new WampOutgoingMessageHandler(connection);

        this._proxy = new WampRouterProxy(outgoingMessageHandler);

        this._incomingMessageHandler =
            new WampClientIncomingMessageHandler(new SessionClient(this._proxy),
                new Caller(this._proxy),
                new Callee(this._proxy),
                new Publisher(this._proxy),
                new Subscriber(this._proxy));

        this._connection.onmessage = (message: WampMessage) => {
            this._incomingMessageHandler.handleWampMessage(message);            
        }
    }
}