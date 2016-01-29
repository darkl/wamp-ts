interface IWampClientProxy extends ISessionClient, ICallee, ICaller, ISubscriber, IPublisher {
    sendRaw(message : WampMessage);

    session : number;
}