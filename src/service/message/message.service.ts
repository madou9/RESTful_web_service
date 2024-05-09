import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';

/*
    this.http.post(url, { text: msg }): This line uses the injected http service (likely from @nestjs/axios) to make a POST request to the url
    3: without the subscribe the application would initiate the HTTP request but wouldn't do anything with the response
*/
const url = ""
@Injectable()
export class MessageService {
    constructor(private http: HttpService) { }

    SendMessage(msg: string) {
        // console.log("here")
        this.http.post(url, { text: msg }).subscribe(); // 3
    }
}
