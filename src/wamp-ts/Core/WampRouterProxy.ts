import {WampMessage} from "./WampMessage";
import {WampPeerProxy} from "./WampPeerProxy";
import {WampMessageType, IHelloDetails, IAbortDetails, IEventDetails, IGoodbyeDetails, IInvocationDetails, IResultDetails, IWelcomeDetails, IYieldOptions, ICallOptions, IPublishOptions, IRegisterOptions, ISubscribeOptions,ISessionRouterProxy,IDealerProxy,IBrokerProxy} from "./Contracts";
import {IWampOutgoingMessageHandler} from "./IWampOutgoingMessageHandler";

export class WampRouterProxy extends WampPeerProxy implements ISessionRouterProxy, IBrokerProxy, IDealerProxy {
    constructor(outgoingMessageHandler: IWampOutgoingMessageHandler) {
        super(outgoingMessageHandler);
    }

    hello(realm: string, details: IHelloDetails): void {
        var message: WampMessage = this._protocol.hello(realm, details);
        this.sendMessage(message);
    }

    abort(details: IAbortDetails, reason: string): void {
        var message: WampMessage = this._protocol.abort(details, reason);
        this.sendMessage(message);
    }

    authenticate(signature: string, extra: any): void {
        var message: WampMessage = this._protocol.authenticate(signature, extra);
        this.sendMessage(message);
    }

    goodbye(details: IGoodbyeDetails, reason: string): void {
        var message: WampMessage = this._protocol.goodbye(details, reason);
        this.sendMessage(message);
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