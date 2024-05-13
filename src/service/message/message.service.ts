import { HttpService } from '@nestjs/axios'; 
import { Injectable } from '@nestjs/common'; 
import { ConfigService } from '@nestjs/config';

/*
    This service class provides a way to send messages to a target URL retrieved from configuration. 
    I can inject this service into controllers or other components that need to send messages.
*/

@Injectable()
export class MessageService {
    constructor(private http: HttpService, private configService: ConfigService) {}
    
    SendMessage(msg: string, target: string) { 
        const url = this.configService.get(target); // Get target URL from configuration
        return this.http.post(url, { text: msg }); // return the POST request observable object
    }
}
