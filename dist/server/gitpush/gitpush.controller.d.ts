import { GitpushServiceImpl } from './gitpush.service';
export declare class GitpushController {
    private readonly gitpushServiceImpl;
    constructor(gitpushServiceImpl: GitpushServiceImpl);
    createUser(body: Object): Promise<void>;
}
