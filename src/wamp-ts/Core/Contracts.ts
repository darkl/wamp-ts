import {IWampClientProxy} from "./IWampClientProxy";

export enum WampMessageType {
    Hello = 1,
    Welcome = 2,
    Abort = 3,
    Challenge = 4,
    Authenticate = 5,
    Goodbye = 6,
    Error = 8,
    Publish = 16,
    Published = 17,
    Subscribe = 32,
    Subscribed = 33,
    Unsubscribe = 34,
    Unsubscribed = 35,
    Event = 36,
    Call = 48,
    Cancel = 49,
    Result = 50,
    Register = 64,
    Registered = 65,
    Unregister = 66,
    Unregistered = 67,
    Invocation = 68,
    Interrupt = 69,
    Yield = 70
}

export interface IBroker {
    publish(clientProxy: IWampClientProxy, request: number, options: IPublishOptions, topic: string, argumentsArray?: any[], argumentsKw?: any): void;
    subscribe(clientProxy: IWampClientProxy, request: number, options: ISubscribeOptions, topic: string): void;
    unsubscribe(clientProxy: IWampClientProxy, request: number, subscription: number): void;
}

export interface IBrokerProxy {
    publish(request: number, options: IPublishOptions, topic: string, argumentsArray?: any[], argumentsKw?: any): void;
    subscribe(request: number, options: ISubscribeOptions, topic: string): void;
    unsubscribe(request: number, subscription: number): void;
}

export interface ICallee {
    registered(request: number, registration: number): void;
    registerError(request: number, details: any, error: string, argumentsArray?: any[], argumentsKw?: any): void;
    unregistered(request: number): void;
    unregisterError(request: number, details: any, error: string, argumentsArray?: any[], argumentsKw?: any): void;
    invocation(request: number, registration: number, details: IInvocationDetails, argumentsArray?: any[], argumentsKw?: any): void;
    interrupt(request: number, options: any): void;
}

export interface ICaller {
    callError(request: number, details: any, error: string, argumentsArray?: any[], argumentsKw?: any): void;
    result(request: number, details: IResultDetails, argumentsArray?: any[], argumentsKw?: any): void;
}

export interface IDealer {
    invocationError(clientProxy: IWampClientProxy, request: number, details: any, error: string, argumentsArray?: any[], argumentsKw?: any): void;
    call(clientProxy: IWampClientProxy, request: number, options: ICallOptions, procedure: string, argumentsArray?: any[], argumentsKw?: any): void;
    cancel(clientProxy: IWampClientProxy, request: number, options: any): void;
    register(clientProxy: IWampClientProxy, request: number, options: IRegisterOptions, procedure: string): void;
    unregister(clientProxy: IWampClientProxy, request: number, registration: number): void;
    yield(clientProxy: IWampClientProxy, request: number, options: IYieldOptions, argumentsArray?: any[], argumentsKw?: any): void;
}

export interface IDealerProxy {
    invocationError(request: number, details: any, error: string, argumentsArray?: any[], argumentsKw?: any): void;
    call(request: number, options: ICallOptions, procedure: string, argumentsArray?: any[], argumentsKw?: any): void;
    cancel(request: number, options: any): void;
    register(request: number, options: IRegisterOptions, procedure: string): void;
    unregister(request: number, registration: number): void;
    yield(request: number, options: IYieldOptions, argumentsArray?: any[], argumentsKw?: any): void;
}

export interface IPublisher {
    published(request: number, publication: number): void;
    publishError(request: number, details: any, error: string, argumentsArray?: any[], argumentsKw?: any): void;
}

export interface ISessionClient {
    welcome(session: number, details: IWelcomeDetails): void;
    abort(details: IAbortDetails, reason: string): void;
    challenge(authMethod: string, extra: any): void;
    goodbye(details: IGoodbyeDetails, reason: string): void;
}

export interface ISessionRouter {
    hello(clientProxy: IWampClientProxy, realm: string, details: IHelloDetails): void;
    abort(clientProxy: IWampClientProxy, details: IAbortDetails, reason: string): void;
    authenticate(clientProxy: IWampClientProxy, signature: string, extra: any): void;
    goodbye(clientProxy: IWampClientProxy, details: IGoodbyeDetails, reason: string): void;
}

export interface ISessionRouterProxy {
    hello(realm: string, details: IHelloDetails): void;
    abort(details: IAbortDetails, reason: string): void;
    authenticate(signature: string, extra: any): void;
    goodbye(details: IGoodbyeDetails, reason: string): void;
}

export interface ISubscriber {
    subscribed(request: number, subscription: number): void;
    subscribeError(request: number, details: any, error: string, argumentsArray?: any[], argumentsKw?: any): void;
    unsubscribed(request: number): void;
    unsubscribeError(request: number, details: any, error: string, argumentsArray?: any[], argumentsKw?: any): void;
    event(subscription: number, publication: number, details: IEventDetails, argumentsArray?: any[], argumentsKw?: any): void;
}

export interface IAbortDetails {
    message: string;
}

export interface ICallOptions {
    timeout: number;
    receive_progress: boolean;
    disclose_me: boolean;
}

export interface IEventDetails {
    publisher: number;
    topic: string;
}

export interface IGoodbyeDetails {
    message: string;
}

export interface IHelloDetails {
    roles: any;
    authmethods: string[];
    authid: string;
}

export interface IInvocationDetails {
    timeout: boolean;
    receive_progress: boolean;
    caller: number;
    procedure: string;
}

export interface IPublishOptions {
    acknowledge: boolean;
    exclude_me: boolean;
    exclude: number[];
    eligible: number[];
    disclose_me: boolean;
}

export interface IRegisterOptions {
    disclose_caller: boolean;
    invoke: string;
    match: string;
}

export interface IResultDetails {
    progress: boolean;
}

export interface ISubscribeOptions {
    match: string;
}

export interface IWelcomeDetails {
    authrole: string;
    authmethod: string;
    authprovider: string;
    roles: any;
    authid: string;
}

export interface IYieldOptions {
    progress: boolean;
}