import * as Core from "../Core";

export class JsonSerializer implements Core.IWampMessageParser {
    get protocolName(): string { return "wamp.2.json" }

    format(message: Core.WampMessage) {
        var json: string = JSON.stringify(message.toArray());
        return json;
    }

    parse(data: any): Core.WampMessage {
        var array: any[] = JSON.parse(data);
        var messageType: Core.WampMessageType, messageArguments: any[];
        [messageType, ...messageArguments] = array;
        return new Core.WampMessage(messageType, messageArguments);
    }
}