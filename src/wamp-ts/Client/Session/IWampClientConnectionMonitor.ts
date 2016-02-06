import * as Core from "../../Core";

interface IWampClientConnectionMonitor {
    connectionEstablished(sessionId: number, helloDetails: Core.IHelloDetails, welcomeDetails: Core.IWelcomeDetails): void;
    connectionBroken(sessionId: number, closeType: SessionCloseType, reason?: string, details?: Core.IGoodbyeDetails | Core.IAbortDetails): void;
    connectionError() : void;
}