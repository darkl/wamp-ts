class WampRouterProxy extends WampPeerProxy implements IBrokerProxy, IDealerProxy {
    constructor(outgoingMessageHandler: IWampOutgoingMessageHandler) {
        super(outgoingMessageHandler);
    }

    publish(request: number, options: IPublishOptions, topic: string, argumentsArray?: any[], argumentsKw?: any): void {
        var message: WampMessage = this._protocol.publish(request, options, topic, argumentsArray, argumentsKw);
        this.sendMessage(message);
    }

    subscribe(request: number, options: ISubscribeOptions, topic: string): void {
        var message: WampMessage = this._protocol.subscribe(request, options, topic);
        this.sendMessage(message);
    }

    unsubscribe(request: number, subscription: number): void {
        var message: WampMessage = this._protocol.unsubscribe(request, subscription);
        this.sendMessage(message);
    }

    call(request: number, options: ICallOptions, procedure: string, argumentsArray?: any[], argumentsKw?: any): void {
        var message: WampMessage = this._protocol.call(request, options, procedure, argumentsArray, argumentsKw);
        this.sendMessage(message);
    }

    cancel(request: number, options: any): void {
        var message: WampMessage = this._protocol.cancel(request, options);
        this.sendMessage(message);
    }

    register(request: number, options: IRegisterOptions, procedure: string): void {
        var message: WampMessage = this._protocol.register(request, options, procedure);
        this.sendMessage(message);
    }

    unregister(request: number, registration: number): void {
        var message: WampMessage = this._protocol.unregister(request, registration);
        this.sendMessage(message);
    }

    invocationError(request: number, details: any, error: string, argumentsArray?: any[], argumentsKw?: any): void {
        var message: WampMessage = this._protocol.error(WampMessageType.Invocation, request, details, error, argumentsArray, argumentsKw);
        this.sendMessage(message);
    }

    yield(request: number, options: IYieldOptions, argumentsArray?: any[], argumentsKw?: any): void {
        var message: WampMessage = this._protocol.yield(request, options, argumentsArray, argumentsKw);
        this.sendMessage(message);
    }
}