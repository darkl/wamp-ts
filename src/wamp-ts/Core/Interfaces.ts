import {WampMessage} from "./WampMessage";

export interface IControlledWampConnection extends IWampConnection {
    open(): void;
}

export interface IWampConnection {
    onclose: (ev: CloseEvent) => any;
    onerror: (ev: Event) => any;
    onmessage: (message: WampMessage) => any;
    onopen: (ev: Event) => any;

    send(message: WampMessage): void;
}

export interface IWampMessageParser {
    protocolName: string;
    format(message: WampMessage): any;
    parse(data: any): WampMessage;
}