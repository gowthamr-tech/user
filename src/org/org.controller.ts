import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Inject,
} from '@nestjs/common';
import { OrgService } from './org.service';
import { CreateOrgDto } from './dto/create-org.dto';
import { UpdateOrgDto } from './dto/update-org.dto';
import { Db } from 'mongodb';

@Controller('org')
export class OrgController {
  constructor(
    private readonly orgService: OrgService,
    @Inject('MONGO_CLIENT') private db: Db,
  ) {}

  @Post('createOrg')
  create(@Body() createOrgDto: CreateOrgDto) {
    console.log('cretajhjds', createOrgDto);
    return this.db.collection('org').insertOne(createOrgDto);
  }

  @Get()
  findAll() {
    return this.db.collection('org').find().toArray();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    // const orgId = new Object(id);
    // const userwithorg = await this.db.collection('users').aggregate([
    //   {
    //     $match: { org_id: orgId },
    //   },
    //   {
    //     $lookup:{
    //       from:'org',
    //       localField:'org_id',
    //       foreignField:'_id',
    //       as:'orgDetails'
    //     }
    //   },
    //   {
    //     $unwind:'$orgDetails'
    //   }
    // ]);
    // return userwithorg;
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateOrgDto: UpdateOrgDto) {
    return this.orgService.update(+id, updateOrgDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.orgService.remove(+id);
  }
}
