import {WampChannel} from "./Client/WampChannel";
import {WsConnection} from "./ws/WsConnection";
import {JsonSerializer} from "./Common/JsonSerializer";

var channel: WampChannel =
    new WampChannel(new WsConnection("ws://127.0.0.1:8080/ws",
            new JsonSerializer()),
        "realm1");

channel.open().then(x => {console.log("hi");});