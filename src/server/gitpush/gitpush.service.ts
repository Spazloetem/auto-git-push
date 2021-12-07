import { Injectable } from '@nestjs/common';

export const GITPUSH_SERVICE = Symbol('GITPUSH_SERVICE');

export interface GitpushService {
    action(body:Object):void
}

@Injectable()
export class GitpushServiceImpl implements GitpushService {

    async action(body:Object){
        if(body['hook_id'] != undefined){
            const exec = require('child_process').exec;
            var script = exec('sh test.sh',
                (error, stdout, stderr) => {
                    console.log(`${stdout}`);
                    if (error !== null) {
                        console.log(`exec error: ${error}`);
                }
            });
        }
    }

}
