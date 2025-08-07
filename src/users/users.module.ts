import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { MongoProvider } from 'src/database/mongo.provider';

@Module({
  controllers: [UsersController],
  providers: [UsersService,MongoProvider],
  // exports:[MongoProvider]
})
export class UsersModule {}
