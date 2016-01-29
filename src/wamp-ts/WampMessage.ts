class WampMessage {
    private _messageType: WampMessageType;
    private _arguments: any[];

    constructor(messageType : WampMessageType, args : any[]) {
        this._messageType = messageType;
        this._arguments = args;
    }

    get messageType(): WampMessageType { return this._messageType; }

    get arguments(): any[] { return this._arguments; }

    public toArray(): any[] {
        var result: any[] = [this.messageType, ... this.arguments];

        return result;
    }
}