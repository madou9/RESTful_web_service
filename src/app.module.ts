import { Module } from '@nestjs/common';
import { MessageController } from './controller/message/Message.controller';
import { MessageService } from './service/message/Message.service';
import { HttpModule } from '@nestjs/axios';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [HttpModule, ConfigModule.forRoot()],
  controllers: [MessageController],
  providers: [MessageService],
})
export class AppModule {}
