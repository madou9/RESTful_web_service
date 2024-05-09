import { Injectable } from '@nestjs/common';

@Injectable()
export class MessageService {
    getMessage(): string{
        return "hi Hama"
    }
}
