import { Body, Controller, Post } from '@nestjs/common';
import { MessageService } from 'src/service/message/Message.service';
import { MessageType } from './MessageType';
import { json } from 'stream/consumers';

@Controller('message')
export class MessageController {
    constructor (private mesgService: MessageService){}
    
    @Post()
    getMessage(@Body() body: MessageType){
        // console.log("here");
        if (body.Type == "Warning"){
            this.mesgService.SendMessage(body.Description)
            console.log("Notification forwarded to teams channel!!!")
        }
        else 
            console.log("Notification could not be forwarded!!!")
    }
}
