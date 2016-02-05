interface IWampClientProxy extends ISessionClient, ICallee, ICaller, ISubscriber, IPublisher {
    sendRaw(message : WampMessage) : void;

    session : number;
}