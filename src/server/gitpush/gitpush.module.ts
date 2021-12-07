import { Module } from '@nestjs/common';
import { GitpushController } from './gitpush.controller';
import { GITPUSH_SERVICE,GitpushServiceImpl } from './gitpush.service';

const modules = [
  {
    provide: GITPUSH_SERVICE,
    useClass: GitpushServiceImpl,
  }
]


@Module({
  controllers: [GitpushController],
  providers: modules,
  exports: modules,
})
export class GitpushModule {}
