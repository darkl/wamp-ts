interface IWampConnection {
    onclose: (ev: CloseEvent) => any;
    onerror: (ev: Event) => any;
    onmessage: (message: WampMessage) => any;
    onopen: (ev: Event) => any;

    send(message: WampMessage): void;
}