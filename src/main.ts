import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestMicroserviceOptions } from '@nestjs/common/interfaces/microservices/nest-microservice-options.interface';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';

async function bootstrap() {
  // const app = await NestFactory.create(AppModule);
  // app.connectMicroservice<MicroserviceOptions>({
  //   transport: Transport.KAFKA,
  //   options: {
  //     client: {
  //       brokers: ['localhost:29092'],
  //       retry: {
  //         initialRetryTime: 300,
  //         retries: 10,
  //       },
  //     },

  //     consumer: {
  //       groupId: 'user-service',
  //     },
  //   },
  // });
  // await app.startAllMicroservices();
  // await app.listen(4001);

// const app = await NestFactory.createMicroservice<MicroserviceOptions>(AppModule, {
const app=await NestFactory.create(AppModule);
app.connectMicroservice<MicroserviceOptions>({
transport: Transport.RMQ,
  options: {
    urls: ['amqp://localhost:5672'],
    queue: 'cats_queue',
    queueOptions: {
      durable: false
    },
  },
})
await app.startAllMicroservices();
await app.listen(4001);
}
bootstrap();
