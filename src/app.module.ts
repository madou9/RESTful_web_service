import { Module } from '@nestjs/common';
import { MessageController } from './controller/message/message.controller';
import { MessageService } from './service/message/message.service';

@Module({
  imports: [],
  controllers: [MessageController],
  providers: [MessageService],
})
export class AppModule {}
