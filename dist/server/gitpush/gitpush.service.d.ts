export declare const GITPUSH_SERVICE: unique symbol;
export interface GitpushService {
    action(body: Object): void;
}
export declare class GitpushServiceImpl implements GitpushService {
    action(body: Object): Promise<void>;
}
