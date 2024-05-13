import { HttpService } from '@nestjs/axios'; // Import HttpService for making HTTP requests
import { Injectable } from '@nestjs/common'; // Injectable decorator for defining a service
import { ConfigService } from '@nestjs/config'; // ConfigService for accessing configuration values

/*
    This service class provides a way to send messages to a target URL retrieved from configuration. 
    I can inject this service into controllers or other components that need to send messages.
*/

@Injectable() // Marks this class as injectable for NestJS dependency injection
export class MessageService {
    constructor(private http: HttpService, private configService: ConfigService) {} // Injected HttpService and ConfigService instance
    
    SendMessage(msg: string, target: string) { 
        const url = this.configService.get(target); // Get target URL from configuration
        return this.http.post(url, { text: msg }); // Send POST request to target URL with message
    }
}
