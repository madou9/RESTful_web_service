import { Module } from '@nestjs/common';
import { MessageController } from './controller/message/Message.controller';
import { MessageService } from './service/message/Message.service';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [HttpModule],
  controllers: [MessageController],
  providers: [MessageService],
})
export class AppModule {}
