import { Controller } from '@nestjs/common';
import { MessageService } from 'src/service/message/message.service';

@Controller('message')
export class MessageController {
    constructor(private readonly messageService: MessageService){}
}
