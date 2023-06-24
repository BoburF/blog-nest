import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TelegrafModule } from 'nestjs-telegraf';

@Module({
  imports: [TelegrafModule.forRoot({token: "6226547413:AAGlA8LTl7h3pTSySemZ9eXN9mm94Ie1nOE"})],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
