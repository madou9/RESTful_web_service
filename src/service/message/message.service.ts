import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';

const url = "https://hooks.slack.com/services/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"
@Injectable()
export class MessageService {
    constructor(private http: HttpService) { }

    SendMessage(msg: string) {
        // console.log("here")
        this.http.post(url, { text: msg }).subscribe();
    }
}
