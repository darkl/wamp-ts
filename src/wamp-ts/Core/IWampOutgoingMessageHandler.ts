import {WampMessage} from "./WampMessage";

export interface IWampOutgoingMessageHandler {
    handleMessage(message: WampMessage): void;
}