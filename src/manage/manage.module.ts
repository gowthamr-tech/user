import { Module } from '@nestjs/common';
import { ManageService } from './manage.service';
import { ManageResolver } from './manage.resolver';

@Module({
  providers: [ManageResolver, ManageService],
})
export class ManageModule {}
