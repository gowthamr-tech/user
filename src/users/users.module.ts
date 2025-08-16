import { forwardRef, Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { MongoProvider } from 'database/mongo.provider';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { UsersResolver } from './users.resolver';
import { OrgService } from 'src/org/org.service';
import { OrgModule } from 'src/org/org.module';
import { APP_GUARD } from '@nestjs/core';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@Module({
  imports:[TypeOrmModule.forFeature([User]),
forwardRef(()=>OrgModule)
],
  controllers: [UsersController],
  providers: [UsersService,MongoProvider,UsersResolver,
  
  ],
  // exports:[MongoProvider]
  exports:[UsersService]
})
export class UsersModule {}
