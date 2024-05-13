import { Body, Controller, HttpException, HttpStatus, Post, Res } from '@nestjs/common';
import { MessageService } from 'src/service/message/Message.service';
import { MessageType } from './MessageType';
import { catchError, map } from 'rxjs/operators';
import { Response } from 'express';


/*
    The response.sendStatus() function is used to set the response HTTP status code to statusCode and send its string representation as the response body.
*/
@Controller('message')
export class MessageController {
    constructor (private mesgService: MessageService){}
        @Post()
        getMessage(@Body() body: MessageType, @Res() response: Response): any {
            if (body.Type === "Warning") {
                const req = this.mesgService.SendMessage(body.Description, body.Target);
                return req.pipe(
					map((apiResponse) => {
					  response.sendStatus(apiResponse.status)
					}),
					catchError((error) => {
					  response.sendStatus(500);
					  throw new HttpException('Failed to connect to external API', HttpStatus.INTERNAL_SERVER_ERROR);
					})
				);
            } else
            throw new HttpException('Notification type not supported', HttpStatus.BAD_REQUEST); // Error response
    }
}
