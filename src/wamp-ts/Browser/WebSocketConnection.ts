class WebSocketConnection implements IControlledWampConnection {
    private _url: string;
    private _websocket: WebSocket;
    private _parser: IWampMessageParser;

    constructor(url: string, parser: IWampMessageParser) {
        this._parser = parser;
        this._url = url;
        this.onclose = (ev: CloseEvent) => { };
        this.onerror = (ev: Event) => { };
        this.onopen = (ev: Event) => { };
        this.onmessage = (ev: WampMessage) => { };
    }

    onclose: (ev: CloseEvent) => any;
    onerror: (ev: Event) => any;
    onmessage: (message: WampMessage) => any;
    onopen: (ev: Event) => any;

    send(message: WampMessage): void {
        var formatted: any = this._parser.format(message);
        this._websocket.send(formatted);
    }

    open(): void {
        this._websocket = new WebSocket(this._url, this._parser.protocolName);

        this.setupHooks();
    }

    private setupHooks(): void {
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
            var parsed: WampMessage = this._parser.parse(ev.data);
            this.onmessage(parsed);
        };
    }
}