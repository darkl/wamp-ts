class WampPeerProxy {
    private _outgoingMessageHandler: IWampOutgoingMessageHandler;
    protected _protocol: WampProtocol;

    constructor(outgoingMessageHandler: IWampOutgoingMessageHandler) {
        this._outgoingMessageHandler = outgoingMessageHandler;
        this._protocol = new WampProtocol();
    }

    protected sendMessage(wampMessage: WampMessage): void {
        this._outgoingMessageHandler.handleMessage(wampMessage);
    }
}