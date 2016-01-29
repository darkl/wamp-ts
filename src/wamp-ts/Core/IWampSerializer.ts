interface IWampMessageParser {
    protocolName: string;
    format(message: WampMessage): any;
    parse(data: any): WampMessage;
}