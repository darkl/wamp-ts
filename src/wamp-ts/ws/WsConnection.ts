/// <reference path="../Scripts/typings/ws/ws.d.ts"/>

import * as Core from "../Core"
import * as WebSocket from "ws";

export class WsConnection implements Core.IControlledWampConnection {
    private _url: string;
    private _websocket: WebSocket;
    private _parser: Core.IWampMessageParser;

    constructor(url: string, parser: Core.IWampMessageParser) {
        this._parser = parser;
        this._url = url;
        this.onclose = (ev: CloseEvent) => { };
        this.onerror = (ev: Event) => { };
        this.onopen = (ev: Event) => { };
        this.onmessage = (ev: Core.WampMessage) => { };
    }

    onclose: (ev: CloseEvent) => any;
    onerror: (ev: Event) => any;
    onmessage: (message: Core.WampMessage) => any;
    onopen: (ev: Event) => any;

    send(message: Core.WampMessage): void {
        var formatted: any = this._parser.format(message);
        this._websocket.send(formatted);
    }

    open(): void {
        this._websocket = new WebSocket(this._url, {
            protocol: this._parser.protocolName
        });

        this.setupHooks();
    }

    private setupHooks(): void {
        this._websocket.onmessage = (event: { data: any; type: string; target: WebSocket }) => {
            var parsed: Core.WampMessage = this._parser.parse(event.data);
            this.onmessage(parsed);
        };

        this._websocket.onerror = (err: Error) => {
            this.onerror(null);
        };

        this._websocket.onopen = (event: { target: WebSocket }) => {
            this.onopen(null);
        };

        this._websocket.onclose = (event: { wasClean: boolean; code: number; reason: string; target: WebSocket }) => {
            this.onclose(null);
        };
    }
}