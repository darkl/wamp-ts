interface IWampClientProxy extends ISessionClient, ICallee, ICaller, ISubscriber, IPublisher {
    sendRaw();

    session : number;
}