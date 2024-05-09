import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MessageController } from './controller/message/message.controller';
import { MessageService } from './service/message/message.service';

@Module({
  imports: [],
  controllers: [AppController, MessageController],
  providers: [AppService, MessageService],
})
export class AppModule {}
