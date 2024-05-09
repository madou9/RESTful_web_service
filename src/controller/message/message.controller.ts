import { Body, Controller, Post } from '@nestjs/common';
import { MessageService } from 'src/service/message/message.service';

@Controller('message')
export class MessageController {
    constructor(private readonly messageService: MessageService){}

    @Post()
    sendMessage(@Body() message: any){
        return this.messageService.getMessage();
    }
}
