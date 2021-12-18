import { Injectable } from '@nestjs/common';

export const GITPUSH_SERVICE = Symbol('GITPUSH_SERVICE');

export interface GitpushService {
    action():void
}

@Injectable()
export class GitpushServiceImpl implements GitpushService {
    async action(){
        const exec = require('child_process').exec;
        var script = exec('sh /build.sh',
            (error, stdout, stderr) => {
                console.log(`${stdout}`);
                if (error !== null) {
                    console.log(`exec error: ${error}`);
            }
        });
    }
    async actionFront(){
        const exec = require('child_process').exec;
        var script = exec('sh /buildfront.sh',
            (error, stdout, stderr) => {
                console.log(`${stdout}`);
                if (error !== null) {
                    console.log(`exec error: ${error}`);
            }
        });
    }

}
