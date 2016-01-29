interface IWampOutgoingMessageHandler {
    handleMessage(message: WampMessage): void;
}