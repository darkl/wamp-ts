class WampProtocol {
    public hello(realm: string, details: IHelloDetails): any[] {
        return [realm, details];
    }

    public welcome(session: number, details: IWelcomeDetails): any[] {
        return [session, details];
    }

    public abort(details: IAbortDetails, reason: string): any[] {
        return [details, reason];
    }

    public challenge(authMethod: string, extra: any): any[] {
        return [authMethod, extra];
    }

    public authenticate(signature: string, extra: any): any[] {
        return [signature, extra];
    }

    public goodbye(details: IGoodbyeDetails, reason: string): any[] {
        return [details, reason];
    }

    public error(type: number, request: number, details: any, error: string, argumentsArray?: any[], argumentsKw?: any): any[] {
        return [type, request, details, error, argumentsArray, argumentsKw];
    }

    public publish(request: number, options: IPublishOptions, topic: string, argumentsArray?: any[], argumentsKw?: any): any[] {
        return [request, options, topic, argumentsArray, argumentsKw];
    }

    public published(request: number, publication: number): any[] {
        return [request, publication];
    }

    public subscribe(request: number, options: ISubscribeOptions, topic: string): any[] {
        return [request, options, topic];
    }

    public subscribed(request: number, subscription: number): any[] {
        return [request, subscription];
    }

    public unsubscribe(request: number, subscription: number): any[] {
        return [request, subscription];
    }

    public unsubscribed(request: number): any[] {
        return [request];
    }

    public event(subscription: number, publication: number, details: IEventDetails, argumentsArray?: any[], argumentsKw?: any): any[] {
        return [subscription, publication, details, argumentsArray, argumentsKw];
    }

    public call(request: number, options: ICallOptions, procedure: string, argumentsArray?: any[], argumentsKw?: any): any[] {
        return [request, options, procedure, argumentsArray, argumentsKw];
    }

    public cancel(request: number, options: any): any[] {
        return [request, options];
    }

    public result(request: number, details: IResultDetails, argumentsArray?: any[], argumentsKw?: any): any[] {
        return [request, details, argumentsArray, argumentsKw];
    }

    public register(request: number, options: IRegisterOptions, procedure: string): any[] {
        return [request, options, procedure];
    }

    public registered(request: number, registration: number): any[] {
        return [request, registration];
    }

    public unregister(request: number, registration: number): any[] {
        return [request, registration];
    }

    public unregistered(request: number): any[] {
        return [request];
    }

    public invocation(request: number, registration: number, details: IInvocationDetails, argumentsArray?: any[], argumentsKw?: any): any[] {
        return [request, registration, details, argumentsArray, argumentsKw];
    }

    public interrupt(request: number, options: any): any[] {
        return [request, options];
    }

    public yield(request: number, options: IYieldOptions, argumentsArray?: any[], argumentsKw?: any): any[] {
        return [request, options, argumentsArray, argumentsKw];
    }
}