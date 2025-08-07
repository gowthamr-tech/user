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
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Db, ObjectId } from 'mongodb';

@Controller('users')
export class UsersController {
  constructor(
    private readonly usersService: UsersService,
    @Inject('MONGO_CLIENT') private readonly db: Db,
  ) {}

  @Post('createUser')
  create(@Body() user: CreateUserDto) {
    return this.db.collection('users').insertOne(user);
  }

  @Get()
  findAll() {
    return this.db.collection('users').find().toArray();
  }

  @Get(':id')
 async findOne(@Param('id') id: string) {
    const orgId = new ObjectId(id);
    const userwithorg = await this.db.collection('users').aggregate([
      {
        $match: { org_id: orgId },
      },
      {
        $lookup: {
          from: 'org',
          localField: 'org_id',
          foreignField: '_id',
          as: 'orgDetails',
        },
      },
      {
        $unwind: '$orgDetails',
      },
    ]);
    return userwithorg.toArray();
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(+id, updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usersService.remove(+id);
  }
}
