export declare const GITPUSH_SERVICE: unique symbol;
export interface GitpushService {
    action(): void;
}
export declare class GitpushServiceImpl implements GitpushService {
    action(): Promise<void>;
}
