import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';

/*
    this.http.post(url, { text: msg }): This line uses the injected http service (likely from @nestjs/axios) to make a POST request to the url
    3: without the subscribe the application would initiate the HTTP request but wouldn't do anything with the response
*/
const url = "https://hooks.slack.com/services/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"
@Injectable()
export class MessageService {
    constructor(private http: HttpService) { }

    SendMessage(msg: string) {
        // console.log("here")
        this.http.post(url, { text: msg }).subscribe(); // 3
    }
}
