import {WampMessage} from "./WampMessage";
import {ISessionClient, ICallee, ICaller, ISubscriber, IPublisher} from "./Contracts";

export interface IWampClientProxy extends ISessionClient, ICallee, ICaller, ISubscriber, IPublisher {
    sendRaw(message : WampMessage) : void;

    session : number;
}