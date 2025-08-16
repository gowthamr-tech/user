  import { Module } from '@nestjs/common';
  import { AppController } from './app.controller';
  import { AppService } from './app.service';
  import { AuthModule } from './auth/auth.module';
  import { UsersModule } from './users/users.module';
  import { OrgModule } from './org/org.module';
  import { ClientsModule, Transport } from '@nestjs/microservices';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './users/entities/user.entity';
import { ManageModule } from './manage/manage.module';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig, ApolloFederationDriver, ApolloFederationDriverConfig } from '@nestjs/apollo';
import { join } from 'path';
import { APP_GUARD } from '@nestjs/core';
import { JwtAuthGuard } from './auth/jwt-auth.guard';
import { RolesModule } from './roles/roles.module';

  @Module({
    imports: [AuthModule, UsersModule, OrgModule,
      TypeOrmModule.forRoot({
            type:'postgres',
            host:'localhost',
            port:5432,
            username:'postgres',
            password:'1234',
            database:'Querying',
            entities:[User],
            synchronize:true
      }),
      GraphQLModule.forRoot<ApolloFederationDriverConfig>({
             driver:ApolloFederationDriver,
             typePaths:['./**/*.graphql'],
             definitions:{
              path:join(process.cwd(),'src/graphql.ts')
             }
            // autoSchemaFile:join(process.cwd(),'src/schema.gql'),
            // definitions:undefined
      }),

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

      ManageModule,

      RolesModule,
    ],
    controllers: [AppController],
    providers: [AppService,
     
    ],
    // exports:[MongoProvider]
  })
  export class AppModule {}
