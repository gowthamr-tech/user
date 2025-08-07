import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

 
  // @Get('event')
  // sendEvent() {
  //   this.appService.emitEvent();
  //   return 'Event emitted';
  // }

  // @Get('message')
  // async sendMessage() {
  //   return this.appService.sendMessage();
  // }
}
