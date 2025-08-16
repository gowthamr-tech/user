import { forwardRef, Module } from '@nestjs/common';
import { OrgService } from './org.service';
import { OrgController } from './org.controller';
import { MongoProvider } from 'database/mongo.provider';
import { UsersService } from 'src/users/users.service';
import { UsersModule } from 'src/users/users.module';

@Module({
  imports:[forwardRef(()=>UsersModule)],
  controllers: [OrgController],
  providers: [OrgService, MongoProvider],
  exports:[OrgService]
})
export class OrgModule {}
