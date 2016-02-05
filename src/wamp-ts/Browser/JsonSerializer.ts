class JsonSerializer implements IWampMessageParser {
    get protocolName(): string { return "wamp.2.json" }

    format(message: WampMessage) {
        var json: string = JSON.stringify(message.toArray());
        return json;
    }

    parse(data : any): WampMessage {
        var array: any[] = JSON.parse(data);
        var messageType: WampMessageType, messageArguments: any[];
        [messageType, ...messageArguments] = array;
        return new WampMessage(messageType, messageArguments);
    }
}