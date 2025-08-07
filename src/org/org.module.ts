import { Module } from '@nestjs/common';
import { OrgService } from './org.service';
import { OrgController } from './org.controller';
import { MongoProvider } from 'src/database/mongo.provider';

@Module({
  controllers: [OrgController],
  providers: [OrgService, MongoProvider],
})
export class OrgModule {}
