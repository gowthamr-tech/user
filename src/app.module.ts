  import { Module } from '@nestjs/common';
  import { AppController } from './app.controller';
  import { AppService } from './app.service';
  import { AuthModule } from './auth/auth.module';
  import { UsersModule } from './users/users.module';
  import { OrgModule } from './org/org.module';
  import { ClientsModule, Transport } from '@nestjs/microservices';

  @Module({
    imports: [AuthModule, UsersModule, OrgModule,

      ClientsModule.register([
        {
          name: 'KAFKA_SERVICE',
          // transport: Transport.KAFKA,
          transport:Transport.RMQ,
          options:{
            urls:['amqp://localhost:5672'],
            queue:'user',
            queueOptions:{
              durable:false
            }
          }

          // options: {
          //   client: {
          //     brokers: ['localhost:29092'],
          //   },
          //   consumer: {
          //     groupId: 'user-service',
          //   },
          // },
        },
      ]),
    ],
    controllers: [AppController],
    providers: [AppService],
    // exports:[MongoProvider]
  })
  export class AppModule {}
