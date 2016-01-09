abstract class WampRouterIncomingMessageHandler {
    public handleWampMessage(clientProxy: IWampClientProxy, messageArray: any[]): void {
        var [messageType, messageArguments] = messageArray;

        switch (messageType) {
            case WampMessageType.Hello: {
                let realm: string, details: IHelloDetails;
                [realm, details] = messageArguments;
                this.handleHello(clientProxy, realm, details);
            }
            case WampMessageType.Abort: {
                let details: IAbortDetails, reason: string;
                [details, reason] = messageArguments;
                this.handleAbort(clientProxy, details, reason);
            }
            case WampMessageType.Authenticate: {
                let signature: string, extra: any;
                [signature, extra] = messageArguments;
                this.handleAuthenticate(clientProxy, signature, extra);
            }
            case WampMessageType.Goodbye: {
                let details: IGoodbyeDetails, reason: string;
                [details, reason] = messageArguments;
                this.handleGoodbye(clientProxy, details, reason);
            }
            case WampMessageType.Error: {
                let type: number, request: number, details: any, error: string, argumentsArray: any[], argumentsKw: any;
                [type, request, details, error, argumentsArray, argumentsKw] = messageArguments;
                this.handleError(clientProxy, type, request, details, error, argumentsArray, argumentsKw);
            }
            case WampMessageType.Publish: {
                let request: number, options: IPublishOptions, topic: string, argumentsArray: any[], argumentsKw: any;
                [request, options, topic, argumentsArray, argumentsKw] = messageArguments;
                this.handlePublish(clientProxy, request, options, topic, argumentsArray, argumentsKw);
            }
            case WampMessageType.Subscribe: {
                let request: number, options: ISubscribeOptions, topic: string;
                [request, options, topic] = messageArguments;
                this.handleSubscribe(clientProxy, request, options, topic);
            }
            case WampMessageType.Unsubscribe: {
                let request: number, subscription: number;
                [request, subscription] = messageArguments;
                this.handleUnsubscribe(clientProxy, request, subscription);
            }
            case WampMessageType.Call: {
                let request: number, options: ICallOptions, procedure: string, argumentsArray: any[], argumentsKw: any;
                [request, options, procedure, argumentsArray, argumentsKw] = messageArguments;
                this.handleCall(clientProxy, request, options, procedure, argumentsArray, argumentsKw);
            }
            case WampMessageType.Cancel: {
                let request: number, options: any;
                [request, options] = messageArguments;
                this.handleCancel(clientProxy, request, options);
            }
            case WampMessageType.Register: {
                let request: number, options: IRegisterOptions, procedure: string;
                [request, options, procedure] = messageArguments;
                this.handleRegister(clientProxy, request, options, procedure);
            }
            case WampMessageType.Unregister: {
                let request: number, registration: number;
                [request, registration] = messageArguments;
                this.handleUnregister(clientProxy, request, registration);
            }
            case WampMessageType.Yield: {
                let request: number, options: IYieldOptions, argumentsArray: any[], argumentsKw: any;
                [request, options, argumentsArray, argumentsKw] = messageArguments;
                this.handleYield(clientProxy, request, options, argumentsArray, argumentsKw);
            }
            default:
            // TODO: Handle invalid WAMP message type
        }
    }

    protected abstract handleHello(clientProxy: IWampClientProxy, realm: string, details: IHelloDetails): void;
    protected abstract handleAbort(clientProxy: IWampClientProxy, details: IAbortDetails, reason: string): void;
    protected abstract handleAuthenticate(clientProxy: IWampClientProxy, signature: string, extra: any): void;
    protected abstract handleGoodbye(clientProxy: IWampClientProxy, details: IGoodbyeDetails, reason: string): void;
    protected abstract handleError(clientProxy: IWampClientProxy, type: number, request: number, details: any, error: string, argumentsArray?: any[], argumentsKw?: any): void;
    protected abstract handlePublish(clientProxy: IWampClientProxy, request: number, options: IPublishOptions, topic: string, argumentsArray?: any[], argumentsKw?: any): void;
    protected abstract handleSubscribe(clientProxy: IWampClientProxy, request: number, options: ISubscribeOptions, topic: string): void;
    protected abstract handleUnsubscribe(clientProxy: IWampClientProxy, request: number, subscription: number): void;
    protected abstract handleCall(clientProxy: IWampClientProxy, request: number, options: ICallOptions, procedure: string, argumentsArray?: any[], argumentsKw?: any): void;
    protected abstract handleCancel(clientProxy: IWampClientProxy, request: number, options: any): void;
    protected abstract handleRegister(clientProxy: IWampClientProxy, request: number, options: IRegisterOptions, procedure: string): void;
    protected abstract handleUnregister(clientProxy: IWampClientProxy, request: number, registration: number): void;
    protected abstract handleYield(clientProxy: IWampClientProxy, request: number, options: IYieldOptions, argumentsArray?: any[], argumentsKw?: any): void;
}