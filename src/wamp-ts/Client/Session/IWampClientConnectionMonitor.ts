interface IWampClientConnectionMonitor {
    connectionEstablished(sessionId: number, helloDetails: IHelloDetails, welcomeDetails: IWelcomeDetails);
    connectionBroken(sessionId: number, closeType: SessionCloseType, reason?: string, details?: IGoodbyeDetails | IAbortDetails);
    connectionError();
}