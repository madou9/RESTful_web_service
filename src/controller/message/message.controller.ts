import { Body, Controller, HttpException, HttpStatus, Post } from '@nestjs/common';
import { MessageService } from 'src/service/message/Message.service';
import { MessageType } from './MessageType';

@Controller('message')
export class MessageController {
    constructor (private mesgService: MessageService){}
        @Post()
        getMessage(@Body() body: MessageType): any {
            if (body.Type === "Warning") {
                this.mesgService.SendMessage(body.Description)
                return { message: "Notification processed successfully" }; // Success response
            } else
            throw new HttpException('Notification type not supported', HttpStatus.BAD_REQUEST); // Error response
    }
}



