class WampProtocol {
    public hello(realm: string, details: IHelloDetails): any[] {
        return [WampMessageType.Hello, realm, details];
    }

    public welcome(session: number, details: IWelcomeDetails): any[] {
        return [WampMessageType.Welcome, session, details];
    }

    public abort(details: IAbortDetails, reason: string): any[] {
        return [WampMessageType.Abort, details, reason];
    }

    public challenge(authMethod: string, extra: any): any[] {
        return [WampMessageType.Challenge, authMethod, extra];
    }

    public authenticate(signature: string, extra: any): any[] {
        return [WampMessageType.Authenticate, signature, extra];
    }

    public goodbye(details: IGoodbyeDetails, reason: string): any[] {
        return [WampMessageType.Goodbye, details, reason];
    }

    public error(type: number, request: number, details: any, error: string, argumentsArray?: any[], argumentsKw?: any): any[] {
        return [WampMessageType.Error, type, request, details, error, argumentsArray, argumentsKw];
    }

    public publish(request: number, options: IPublishOptions, topic: string, argumentsArray?: any[], argumentsKw?: any): any[] {
        return [WampMessageType.Publish, request, options, topic, argumentsArray, argumentsKw];
    }

    public published(request: number, publication: number): any[] {
        return [WampMessageType.Published, request, publication];
    }

    public subscribe(request: number, options: ISubscribeOptions, topic: string): any[] {
        return [WampMessageType.Subscribe, request, options, topic];
    }

    public subscribed(request: number, subscription: number): any[] {
        return [WampMessageType.Subscribed, request, subscription];
    }

    public unsubscribe(request: number, subscription: number): any[] {
        return [WampMessageType.Unsubscribe, request, subscription];
    }

    public unsubscribed(request: number): any[] {
        return [WampMessageType.Unsubscribed, request];
    }

    public event(subscription: number, publication: number, details: IEventDetails, argumentsArray?: any[], argumentsKw?: any): any[] {
        return [WampMessageType.Event, subscription, publication, details, argumentsArray, argumentsKw];
    }

    public call(request: number, options: ICallOptions, procedure: string, argumentsArray?: any[], argumentsKw?: any): any[] {
        return [WampMessageType.Call, request, options, procedure, argumentsArray, argumentsKw];
    }

    public cancel(request: number, options: any): any[] {
        return [WampMessageType.Cancel, request, options];
    }

    public result(request: number, details: IResultDetails, argumentsArray?: any[], argumentsKw?: any): any[] {
        return [WampMessageType.Result, request, details, argumentsArray, argumentsKw];
    }

    public register(request: number, options: IRegisterOptions, procedure: string): any[] {
        return [WampMessageType.Register, request, options, procedure];
    }

    public registered(request: number, registration: number): any[] {
        return [WampMessageType.Registered, request, registration];
    }

    public unregister(request: number, registration: number): any[] {
        return [WampMessageType.Unregister, request, registration];
    }

    public unregistered(request: number): any[] {
        return [WampMessageType.Unregistered, request];
    }

    public invocation(request: number, registration: number, details: IInvocationDetails, argumentsArray?: any[], argumentsKw?: any): any[] {
        return [WampMessageType.Invocation, request, registration, details, argumentsArray, argumentsKw];
    }

    public interrupt(request: number, options: any): any[] {
        return [WampMessageType.Interrupt, request, options];
    }

    public yield(request: number, options: IYieldOptions, argumentsArray?: any[], argumentsKw?: any): any[] {
        return [WampMessageType.Yield, request, options, argumentsArray, argumentsKw];
    }
}