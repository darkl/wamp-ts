class WampClientProxy extends WampPeerProxy implements IWampClientProxy {
    constructor(outgoingMessageHandler: IWampOutgoingMessageHandler) {
        super(outgoingMessageHandler);
    }

    session: number;

    sendRaw(message: WampMessage) {
        this.sendMessage(message);
    }

    welcome(session: number, details: IWelcomeDetails): void {
        var message: WampMessage = this._protocol.welcome(session, details);
        this.sendMessage(message);
    }

    abort(details: IAbortDetails, reason: string): void {
        var message: WampMessage = this._protocol.abort(details, reason);
        this.sendMessage(message);
    }

    challenge(authMethod: string, extra: any): void {
        var message: WampMessage = this._protocol.challenge(authMethod, extra);
        this.sendMessage(message);
    }

    goodbye(details: IGoodbyeDetails, reason: string): void {
        var message: WampMessage = this._protocol.goodbye(details, reason);
        this.sendMessage(message);
    }

    publishError(request: number, details: any, error: string, argumentsArray?: any[], argumentsKw?: any): void {
        var message: WampMessage = this._protocol.error(WampMessageType.Publish, request, details, error, argumentsArray, argumentsKw);
        this.sendMessage(message);
    }

    subscribeError(request: number, details: any, error: string, argumentsArray?: any[], argumentsKw?: any): void {
        var message: WampMessage = this._protocol.error(WampMessageType.Subscribe, request, details, error, argumentsArray, argumentsKw);
        this.sendMessage(message);
    }

    subscribed(request: number, subscription: number): void {
        var message: WampMessage = this._protocol.subscribed(request, subscription);
        this.sendMessage(message);
    }

    unsubscribeError(request: number, details: any, error: string, argumentsArray?: any[], argumentsKw?: any): void {
        var message: WampMessage = this._protocol.error(WampMessageType.Unsubscribe, request, details, error, argumentsArray, argumentsKw);
        this.sendMessage(message);
    }

    unsubscribed(request: number): void {
        var message: WampMessage = this._protocol.unsubscribed(request);
        this.sendMessage(message);
    }

    event(subscription: number, publication: number, details: IEventDetails, argumentsArray?: any[], argumentsKw?: any): void {
        var message: WampMessage = this._protocol.event(subscription, publication, details, argumentsArray, argumentsKw);
        this.sendMessage(message);
    }

    published(request: number, publication: number): void {
        var message: WampMessage = this._protocol.published(request, publication);
        this.sendMessage(message);
    }

    callError(request: number, details: any, error: string, argumentsArray?: any[], argumentsKw?: any): void {
        var message: WampMessage = this._protocol.error(WampMessageType.Call, request, details, error, argumentsArray, argumentsKw);
        this.sendMessage(message);
    }

    registerError(request: number, details: any, error: string, argumentsArray?: any[], argumentsKw?: any): void {
        var message: WampMessage = this._protocol.error(WampMessageType.Register, request, details, error, argumentsArray, argumentsKw);
        this.sendMessage(message);
    }

    registered(request: number, registration: number): void {
        var message: WampMessage = this._protocol.registered(request, registration);
        this.sendMessage(message);
    }

    unregisterError(request: number, details: any, error: string, argumentsArray?: any[], argumentsKw?: any): void {
        var message: WampMessage = this._protocol.error(WampMessageType.Unregister, request, details, error, argumentsArray, argumentsKw);
        this.sendMessage(message);
    }

    unregistered(request: number): void {
        var message: WampMessage = this._protocol.unregistered(request);
        this.sendMessage(message);
    }

    invocation(request: number, registration: number, details: IInvocationDetails, argumentsArray?: any[], argumentsKw?: any): void {
        var message: WampMessage = this._protocol.invocation(request, registration, details, argumentsArray, argumentsKw);
        this.sendMessage(message);
    }

    interrupt(request: number, options: any): void {
        var message: WampMessage = this._protocol.interrupt(request, options);
        this.sendMessage(message);
    }

    result(request: number, details: IResultDetails, argumentsArray?: any[], argumentsKw?: any): void {
        var message: WampMessage = this._protocol.result(request, details, argumentsArray, argumentsKw);
        this.sendMessage(message);
    }
}