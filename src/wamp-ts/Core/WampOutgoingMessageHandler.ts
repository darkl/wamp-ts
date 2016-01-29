class WampOutgoingMessageHandler implements IWampOutgoingMessageHandler {
    private _parser: IWampMessageParser;
    private _connection: IWampConnection;

    constructor(connection: IWampConnection) {
        this._connection = connection;
    }

    handleMessage(message: WampMessage): void {
        this._connection.send(message);
    }
}