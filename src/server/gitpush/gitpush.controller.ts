import { Controller ,Inject,Post,Body,Headers} from '@nestjs/common';
import { json } from 'stream/consumers';
import { GITPUSH_SERVICE,GitpushServiceImpl } from './gitpush.service';


@Controller('gitpush')
export class GitpushController {
    constructor(
        @Inject(GITPUSH_SERVICE)
        private readonly gitpushServiceImpl: GitpushServiceImpl,
    ) {}

    @Post()
    async createUser(@Headers() headers){
        if(headers['x-github-event'] == 'push' && 
        headers['x-github-hook-id'] == '332071966' && 
        headers['x-github-hook-installation-target-id'] == '427273910'){
            await this.gitpushServiceImpl.action()
        }
    }


}