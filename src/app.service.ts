import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return '自動更新GIT正常執行@@@@@@';
  }
}
