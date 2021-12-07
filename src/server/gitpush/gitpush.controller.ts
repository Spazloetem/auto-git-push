import { Controller ,Inject,Post,Body} from '@nestjs/common';
import { GITPUSH_SERVICE,GitpushServiceImpl } from './gitpush.service';


@Controller('gitpush')
export class GitpushController {
    constructor(
        @Inject(GITPUSH_SERVICE)
        private readonly gitpushServiceImpl: GitpushServiceImpl,
    ) {}

    @Post()
    async createUser(@Body() body: Object){
        console.log(body)
        return await this.gitpushServiceImpl.action(body);
    }


}