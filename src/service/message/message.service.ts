import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

/*
    this.http.post(url, { text: msg }): This line uses the injected http service (likely from @nestjs/axios) to make a POST request to the url
    3: without the subscribe the application would initiate the HTTP request but wouldn't do anything with the response
*/

@Injectable()
export class MessageService {
    constructor(private http: HttpService, private configService: ConfigService) { }
    
    SendMessage(msg: string) {
        // console.log("here")
        const url = this.configService.get('SLACK_WEBHOOK_URL');
        this.http.post(url, { text: msg }).subscribe(); // 3
    }
}
