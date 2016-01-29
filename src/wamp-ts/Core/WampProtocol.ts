class WampProtocol {
    public hello(realm: string, details: IHelloDetails): WampMessage {
        return new WampMessage(WampMessageType.Hello, [realm, details]);
    }

    public welcome(session: number, details: IWelcomeDetails): WampMessage {
        return new WampMessage(WampMessageType.Welcome, [session, details]);
    }

    public abort(details: IAbortDetails, reason: string): WampMessage {
        return new WampMessage(WampMessageType.Abort, [details, reason]);
    }

    public challenge(authMethod: string, extra: any): WampMessage {
        return new WampMessage(WampMessageType.Challenge, [authMethod, extra]);
    }

    public authenticate(signature: string, extra: any): WampMessage {
        return new WampMessage(WampMessageType.Authenticate, [signature, extra]);
    }

    public goodbye(details: IGoodbyeDetails, reason: string): WampMessage {
        return new WampMessage(WampMessageType.Goodbye, [details, reason]);
    }

    public error(type: number, request: number, details: any, error: string, argumentsArray?: any[], argumentsKw?: any): WampMessage {
        return new WampMessage(WampMessageType.Error, [type, request, details, error, argumentsArray, argumentsKw]);
    }

    public publish(request: number, options: IPublishOptions, topic: string, argumentsArray?: any[], argumentsKw?: any): WampMessage {
        return new WampMessage(WampMessageType.Publish, [request, options, topic, argumentsArray, argumentsKw]);
    }

    public published(request: number, publication: number): WampMessage {
        return new WampMessage(WampMessageType.Published, [request, publication]);
    }

    public subscribe(request: number, options: ISubscribeOptions, topic: string): WampMessage {
        return new WampMessage(WampMessageType.Subscribe, [request, options, topic]);
    }

    public subscribed(request: number, subscription: number): WampMessage {
        return new WampMessage(WampMessageType.Subscribed, [request, subscription]);
    }

    public unsubscribe(request: number, subscription: number): WampMessage {
        return new WampMessage(WampMessageType.Unsubscribe, [request, subscription]);
    }

    public unsubscribed(request: number): WampMessage {
        return new WampMessage(WampMessageType.Unsubscribed, [request]);
    }

    public event(subscription: number, publication: number, details: IEventDetails, argumentsArray?: any[], argumentsKw?: any): WampMessage {
        return new WampMessage(WampMessageType.Event, [subscription, publication, details, argumentsArray, argumentsKw]);
    }

    public call(request: number, options: ICallOptions, procedure: string, argumentsArray?: any[], argumentsKw?: any): WampMessage {
        return new WampMessage(WampMessageType.Call, [request, options, procedure, argumentsArray, argumentsKw]);
    }

    public cancel(request: number, options: any): WampMessage {
        return new WampMessage(WampMessageType.Cancel, [request, options]);
    }

    public result(request: number, details: IResultDetails, argumentsArray?: any[], argumentsKw?: any): WampMessage {
        return new WampMessage(WampMessageType.Result, [request, details, argumentsArray, argumentsKw]);
    }

    public register(request: number, options: IRegisterOptions, procedure: string): WampMessage {
        return new WampMessage(WampMessageType.Register, [request, options, procedure]);
    }

    public registered(request: number, registration: number): WampMessage {
        return new WampMessage(WampMessageType.Registered, [request, registration]);
    }

    public unregister(request: number, registration: number): WampMessage {
        return new WampMessage(WampMessageType.Unregister, [request, registration]);
    }

    public unregistered(request: number): WampMessage {
        return new WampMessage(WampMessageType.Unregistered, [request]);
    }

    public invocation(request: number, registration: number, details: IInvocationDetails, argumentsArray?: any[], argumentsKw?: any): WampMessage {
        return new WampMessage(WampMessageType.Invocation, [request, registration, details, argumentsArray, argumentsKw]);
    }

    public interrupt(request: number, options: any): WampMessage {
        return new WampMessage(WampMessageType.Interrupt, [request, options]);
    }

    public yield(request: number, options: IYieldOptions, argumentsArray?: any[], argumentsKw?: any): WampMessage {
        return new WampMessage(WampMessageType.Yield, [request, options, argumentsArray, argumentsKw]);
    }
}