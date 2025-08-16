import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { CreateOrgDto } from './dto/create-org.dto';
import { UpdateOrgDto } from './dto/update-org.dto';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class OrgService {

  constructor(
    @Inject(forwardRef(()=>UsersService))
    private userService:UsersService
  ){}
  create(createOrgDto: CreateOrgDto) {
    return 'This action adds a new org';
  }

  findAll() {
    return `This action returns all org`;
  }

  findOne(id: number) {
    return `This action returns a #${id} org`;
  }

  update(id: number, updateOrgDto: UpdateOrgDto) {
    return `This action updates a #${id} org`;
  }

  remove(id: number) {
    return `This action removes a #${id} org`;
  }
}
