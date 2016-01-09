class WampRouterIncomingMessageHandler {
    private _dealer: IDealer;
    private _broker: IBroker;
    private _sessionRouter: ISessionRouter;

    constructor(sessionRouter: ISessionRouter,
        broker: IBroker,
        dealer: IDealer) {
        this._dealer = dealer;
        this._broker = broker;
        this._sessionRouter = sessionRouter;
    }

    public handleWampMessage(clientProxy: IWampClientProxy, messageArray: any[]): void {
        var [messageType, messageArguments] = messageArray;

        switch (messageType) {
        case WampMessageType.Hello:
        {
            let realm: string, details: IHelloDetails;
            [realm, details] = messageArguments;
            this.handleHello(clientProxy, realm, details);
        }
        case WampMessageType.Abort:
        {
            let details: IAbortDetails, reason: string;
            [details, reason] = messageArguments;
            this.handleAbort(clientProxy, details, reason);
        }
        case WampMessageType.Authenticate:
        {
            let signature: string, extra: any;
            [signature, extra] = messageArguments;
            this.handleAuthenticate(clientProxy, signature, extra);
        }
        case WampMessageType.Goodbye:
        {
            let details: IGoodbyeDetails, reason: string;
            [details, reason] = messageArguments;
            this.handleGoodbye(clientProxy, details, reason);
        }
        case WampMessageType.Error:
        {
            let type: number, request: number, details: any, error: string, argumentsArray: any[], argumentsKw: any;
            [type, request, details, error, argumentsArray, argumentsKw] = messageArguments;
            this.handleError(clientProxy, type, request, details, error, argumentsArray, argumentsKw);
        }
        case WampMessageType.Publish:
        {
            let request: number, options: IPublishOptions, topic: string, argumentsArray: any[], argumentsKw: any;
            [request, options, topic, argumentsArray, argumentsKw] = messageArguments;
            this.handlePublish(clientProxy, request, options, topic, argumentsArray, argumentsKw);
        }
        case WampMessageType.Subscribe:
        {
            let request: number, options: ISubscribeOptions, topic: string;
            [request, options, topic] = messageArguments;
            this.handleSubscribe(clientProxy, request, options, topic);
        }
        case WampMessageType.Unsubscribe:
        {
            let request: number, subscription: number;
            [request, subscription] = messageArguments;
            this.handleUnsubscribe(clientProxy, request, subscription);
        }
        case WampMessageType.Call:
        {
            let request: number, options: ICallOptions, procedure: string, argumentsArray: any[], argumentsKw: any;
            [request, options, procedure, argumentsArray, argumentsKw] = messageArguments;
            this.handleCall(clientProxy, request, options, procedure, argumentsArray, argumentsKw);
        }
        case WampMessageType.Cancel:
        {
            let request: number, options: any;
            [request, options] = messageArguments;
            this.handleCancel(clientProxy, request, options);
        }
        case WampMessageType.Register:
        {
            let request: number, options: IRegisterOptions, procedure: string;
            [request, options, procedure] = messageArguments;
            this.handleRegister(clientProxy, request, options, procedure);
        }
        case WampMessageType.Unregister:
        {
            let request: number, registration: number;
            [request, registration] = messageArguments;
            this.handleUnregister(clientProxy, request, registration);
        }
        case WampMessageType.Yield:
        {
            let request: number, options: IYieldOptions, argumentsArray: any[], argumentsKw: any;
            [request, options, argumentsArray, argumentsKw] = messageArguments;
            this.handleYield(clientProxy, request, options, argumentsArray, argumentsKw);
        }
        default:
            // TODO: Handle invalid WAMP message type
        }
    }

    private handleHello(clientProxy: IWampClientProxy, realm: string, details: IHelloDetails): void {
        this._sessionRouter.hello(clientProxy, realm, details);
    }

    private handleAbort(clientProxy: IWampClientProxy, details: IAbortDetails, reason: string): void {
        this._sessionRouter.abort(clientProxy, details, reason);
    }

    private handleAuthenticate(clientProxy: IWampClientProxy, signature: string, extra: any): void {
        this._sessionRouter.authenticate(clientProxy, signature, extra);
    }

    private handleGoodbye(clientProxy: IWampClientProxy, details: IGoodbyeDetails, reason: string): void {
        this._sessionRouter.goodbye(clientProxy, details, reason);
    }

    private handleError(clientProxy: IWampClientProxy, type: number, request: number, details: any, error: string, argumentsArray?: any[], argumentsKw?: any): void {
        switch (type) {
        case WampMessageType.Invocation:
        {
            this._dealer.invocationError(clientProxy, request, details, error, argumentsArray, argumentsKw);
            break;
        }
        default:
            // TODO: Handle invalid WAMP message type
        }
    }

    private handlePublish(clientProxy: IWampClientProxy, request: number, options: IPublishOptions, topic: string, argumentsArray?: any[], argumentsKw?: any): void {
        this._broker.publish(clientProxy, request, options, topic, argumentsArray, argumentsKw);
    }

    private handleSubscribe(clientProxy: IWampClientProxy, request: number, options: ISubscribeOptions, topic: string): void {
        this._broker.subscribe(clientProxy, request, options, topic);
    }

    private handleUnsubscribe(clientProxy: IWampClientProxy, request: number, subscription: number): void {
        this._broker.unsubscribe(clientProxy, request, subscription);
    }

    private handleCall(clientProxy: IWampClientProxy, request: number, options: ICallOptions, procedure: string, argumentsArray?: any[], argumentsKw?: any): void {
        this._dealer.call(clientProxy, request, options, procedure, argumentsArray, argumentsKw);
    }

    private handleCancel(clientProxy: IWampClientProxy, request: number, options: any): void {
        this._dealer.cancel(clientProxy, request, options);
    }

    private handleRegister(clientProxy: IWampClientProxy, request: number, options: IRegisterOptions, procedure: string): void {
        this._dealer.register(clientProxy, request, options, procedure);
    }

    private handleUnregister(clientProxy: IWampClientProxy, request: number, registration: number): void {
        this._dealer.unregister(clientProxy, request, registration);
    }

    private handleYield(clientProxy: IWampClientProxy, request: number, options: IYieldOptions, argumentsArray?: any[], argumentsKw?: any): void {
        this._dealer.yield(clientProxy, request, options, argumentsArray, argumentsKw);
    }
}