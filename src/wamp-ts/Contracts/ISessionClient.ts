interface ISessionClient {
    welcome(session: number, details: IWelcomeDetails): void;
    abort(details: IAbortDetails, reason: string): void;
    challenge(authMethod: string, extra: any): void;
    goodbye(details: IGoodbyeDetails, reason: string): void;
}