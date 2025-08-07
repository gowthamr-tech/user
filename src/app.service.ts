import { Inject, Injectable, OnModuleInit } from '@nestjs/common';
import { ClientKafka } from '@nestjs/microservices';

@Injectable()
export class AppService {
}

// export class AppService implements OnModuleInit {
  // constructor(@Inject('KAFKA_SERVICE') private readonly kafkaClient: ClientKafka) {}

  // async onModuleInit() {
  //   this.kafkaClient.subscribeToResponseOf('get_product');
  //   await this.kafkaClient.connect();
  // }

  // emitEvent() {
  //   this.kafkaClient.emit('product_created', { id: 1, name: 'MacBook Pro' });
  // }

  // async sendMessage() {
  //   const result = await this.kafkaClient.send('get_product', { id: 1 }).toPromise();
  //   console.log('📤 Response from product service:', result);
  // }
// }
