import { Body, Controller, HttpException, HttpStatus, Post, Res } from '@nestjs/common';
import { MessageService } from 'src/service/message/Message.service';
import { MessageType } from './MessageType';
import { catchError, map } from 'rxjs/operators';
import { Response } from 'express';

/*
  This controller handles POST requests to /message.
  It checks the message type and uses the MessageService to send the message appropriately.
  It sets the response status code and error messages based on the success or failure of the message sending process.
*/

@Controller('message') 
export class MessageController {
  constructor(private mesgService: MessageService) { } 

  @Post()
  getMessage(@Body() body: MessageType, @Res() response: Response): any {
    if (body.Type === "Warning") {
      const req = this.mesgService.SendMessage(body.Description, body.Target);
      return req.pipe(
        map((apiResponse) => {
          response.sendStatus(apiResponse.status) // Set response status based on API response
        }),
        catchError((error) => {
          response.sendStatus(400);
          throw new HttpException('Failed to connect to external API', HttpStatus.BAD_REQUEST); // code error = 400
        })
      );
    } else
      throw new HttpException('Notification type not supported', HttpStatus.BAD_REQUEST); // code error = 400
  }
}

