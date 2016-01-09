abstract class WampClientIncomingMessageHandler {
    public handleWampMessage(messageArray: any[]): void {
        var [messageType, messageArguments] = messageArray;

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


    protected abstract handleWelcome(session: number, details: IWelcomeDetails): void;
    protected abstract handleAbort(details: IAbortDetails, reason: string): void;
    protected abstract handleChallenge(authMethod: string, extra: any): void;
    protected abstract handleGoodbye(details: IGoodbyeDetails, reason: string): void;
    protected abstract handleError(type: number, request: number, details: any, error: string, argumentsArray?: any[], argumentsKw?: any): void;
    protected abstract handlePublished(request: number, publication: number): void;
    protected abstract handleSubscribed(request: number, subscription: number): void;
    protected abstract handleUnsubscribed(request: number): void;
    protected abstract handleEvent(subscription: number, publication: number, details: IEventDetails, argumentsArray?: any[], argumentsKw?: any): void;
    protected abstract handleResult(request: number, details: IResultDetails, argumentsArray?: any[], argumentsKw?: any): void;
    protected abstract handleRegistered(request: number, registration: number): void;
    protected abstract handleUnregistered(request: number): void;
    protected abstract handleInvocation(request: number, registration: number, details: IInvocationDetails, argumentsArray?: any[], argumentsKw?: any): void;
    protected abstract handleInterrupt(request: number, options: any): void;
}