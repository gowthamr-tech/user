import { Injectable } from '@nestjs/common';
import { CreateManageInput } from './dto/create-manage.input';
import { UpdateManageInput } from './dto/update-manage.input';

@Injectable()
export class ManageService {
  create(createManageInput: CreateManageInput) {
    return 'This action adds a new manage';
  }

  findAll() {
    return `This action returns all manage`;
  }

  findOne(id: number) {
    return `This action returns a #${id} manage`;
  }

  update(id: number, updateManageInput: UpdateManageInput) {
    return `This action updates a #${id} manage`;
  }

  remove(id: number) {
    return `This action removes a #${id} manage`;
  }
}
