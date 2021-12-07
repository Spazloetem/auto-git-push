import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GitpushModule } from './server/gitpush/gitpush.module';

@Module({
  imports: [GitpushModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
