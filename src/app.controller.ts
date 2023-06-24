import { Controller, Get } from '@nestjs/common';
import { Telegraf, Context } from 'telegraf';
import { InjectBot } from 'nestjs-telegraf';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(@InjectBot() private readonly bot: Telegraf<Context>) {}

  @Get()
  getHello(): string {
    return ""
  }
}
