class WampClientIncomingMessageHandler {
    private _sessionClient: ISessionClient;
    private _subscriber: ISubscriber;
    private _publisher: IPublisher;
    private _callee: ICallee;
    private _caller: ICaller;

    constructor(sessionClient: ISessionClient, caller: ICaller, callee: ICallee, publisher: IPublisher, subscriber: ISubscriber) {
        this._sessionClient = sessionClient;
        this._subscriber = subscriber;
        this._publisher = publisher;
        this._callee = callee;
        this._caller = caller;
    }

    public handleWampMessage(message: WampMessage): void {
        var messageType: WampMessageType = message.messageType;
        var messageArguments: any[] = message.arguments;

        switch (messageType) {
            case WampMessageType.Welcome: {
                let session: number, details: IWelcomeDetails;
                [session, details] = messageArguments;
                this.handleWelcome(session, details);
            }
            case WampMessageType.Abort: {
                let details: IAbortDetails, reason: string;
                [details, reason] = messageArguments;
                this.handleAbort(details, reason);
            }
            case WampMessageType.Challenge: {
                let authMethod: string, extra: any;
                [authMethod, extra] = messageArguments;
                this.handleChallenge(authMethod, extra);
            }
            case WampMessageType.Goodbye: {
                let details: IGoodbyeDetails, reason: string;
                [details, reason] = messageArguments;
                this.handleGoodbye(details, reason);
            }
            case WampMessageType.Error: {
                let type: number, request: number, details: any, error: string, argumentsArray: any[], argumentsKw: any;
                [type, request, details, error, argumentsArray, argumentsKw] = messageArguments;
                this.handleError(type, request, details, error, argumentsArray, argumentsKw);
            }
            case WampMessageType.Published: {
                let request: number, publication: number;
                [request, publication] = messageArguments;
                this.handlePublished(request, publication);
            }
            case WampMessageType.Subscribed: {
                let request: number, subscription: number;
                [request, subscription] = messageArguments;
                this.handleSubscribed(request, subscription);
            }
            case WampMessageType.Unsubscribed: {
                let request: number;
                [request] = messageArguments;
                this.handleUnsubscribed(request);
            }
            case WampMessageType.Event: {
                let subscription: number, publication: number, details: IEventDetails, argumentsArray: any[], argumentsKw: any;
                [subscription, publication, details, argumentsArray, argumentsKw] = messageArguments;
                this.handleEvent(subscription, publication, details, argumentsArray, argumentsKw);
            }
            case WampMessageType.Result: {
                let request: number, details: IResultDetails, argumentsArray: any[], argumentsKw: any;
                [request, details, argumentsArray, argumentsKw] = messageArguments;
                this.handleResult(request, details, argumentsArray, argumentsKw);
            }
            case WampMessageType.Registered: {
                let request: number, registration: number;
                [request, registration] = messageArguments;
                this.handleRegistered(request, registration);
            }
            case WampMessageType.Unregistered: {
                let request: number;
                [request] = messageArguments;
                this.handleUnregistered(request);
            }
            case WampMessageType.Invocation: {
                let request: number, registration: number, details: IInvocationDetails, argumentsArray: any[], argumentsKw: any;
                [request, registration, details, argumentsArray, argumentsKw] = messageArguments;
                this.handleInvocation(request, registration, details, argumentsArray, argumentsKw);
            }
            case WampMessageType.Interrupt: {
                let request: number, options: any;
                [request, options] = messageArguments;
                this.handleInterrupt(request, options);
            }
            default:
            // TODO: Handle invalid WAMP message type
        }
    }

    private handleWelcome(session: number, details: IWelcomeDetails): void {
        this._sessionClient.welcome(session, details);
    }
    private handleAbort(details: IAbortDetails, reason: string): void {
        this._sessionClient.abort(details, reason);
    }
    private handleChallenge(authMethod: string, extra: any): void {
        this._sessionClient.challenge(authMethod, extra);
    }
    private handleGoodbye(details: IGoodbyeDetails, reason: string): void {
        this._sessionClient.goodbye(details, reason);
    }

    private handleError(type: number, request: number, details: any, error: string, argumentsArray?: any[], argumentsKw?: any): void {
        switch (type) {
            case WampMessageType.Call:
                {
                    this._caller.callError(request, details, error, argumentsArray, argumentsKw);
                    break;
                }
            case WampMessageType.Register:
                {
                    this._callee.registerError(request, details, error, argumentsArray, argumentsKw);
                    break;
                }
            case WampMessageType.Unregister:
                {
                    this._callee.unregisterError(request, details, error, argumentsArray, argumentsKw);
                    break;
                }
            case WampMessageType.Publish:
                {
                    this._publisher.publishError(request, details, error, argumentsArray, argumentsKw);
                    break;
                }
            case WampMessageType.Subscribe:
                {
                    this._subscriber.subscribeError(request, details, error, argumentsArray, argumentsKw);
                    break;
                }
            case WampMessageType.Unsubscribe:
                {
                    this._subscriber.unsubscribeError(request, details, error, argumentsArray, argumentsKw);
                    break;
                }
            default:
            // TODO: Handle invalid WAMP message type
        }
    }

    private handlePublished(request: number, publication: number): void {
        this._publisher.published(request, publication);
    }
    private handleSubscribed(request: number, subscription: number): void {
        this._subscriber.subscribed(request, subscription);
    }
    private handleUnsubscribed(request: number): void {
        this._subscriber.unsubscribed(request);
    }
    private handleEvent(subscription: number, publication: number, details: IEventDetails, argumentsArray?: any[], argumentsKw?: any): void {
        this._subscriber.event(subscription, publication, details, argumentsArray, argumentsKw);
    }
    private handleResult(request: number, details: IResultDetails, argumentsArray?: any[], argumentsKw?: any): void {
        this._caller.result(request, details, argumentsArray, argumentsKw);
    }
    private handleRegistered(request: number, registration: number): void {
        this._callee.registered(request, registration);
    }
    private handleUnregistered(request: number): void {
        this._callee.unregistered(request);
    }
    private handleInvocation(request: number, registration: number, details: IInvocationDetails, argumentsArray?: any[], argumentsKw?: any): void {
        this._callee.invocation(request, registration, details, argumentsArray, argumentsKw);
    }
    private handleInterrupt(request: number, options: any): void {
        this._callee.interrupt(request, options);
    }
}