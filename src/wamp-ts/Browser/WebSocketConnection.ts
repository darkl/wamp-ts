class WebSocketConnection implements IWampConnection {
    private _websocket: WebSocket;
    private _parser: IWampMessageParser;

    constructor(url: string, parser: IWampMessageParser) {
        this._websocket = new WebSocket(url, parser.protocolName);

        this._websocket.onclose = (ev: CloseEvent) => {
            this.onclose(ev);
        };

        this._websocket.onerror = (ev: Event) => {
            this.onerror(ev);
        };

        this._websocket.onopen = (ev: Event) => {
            this.onopen(ev);
        };

        this._websocket.onmessage = (ev: MessageEvent) => {
            var parsed: WampMessage = parser.parse(ev.data);
            this.onmessage(parsed);
        };
    }

    onclose: (ev: CloseEvent) => any;
    onerror: (ev: Event) => any;
    onmessage: (message: WampMessage) => any;
    onopen: (ev: Event) => any;

    send(message: WampMessage): void {
        var formatted: any = this._parser.format(message);
        this._websocket.send(formatted);
    }
}