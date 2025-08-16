import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { ManageService } from './manage.service';
import { CreateManageInput } from './dto/create-manage.input';
import { UpdateManageInput } from './dto/update-manage.input';

@Resolver('Manage')
export class ManageResolver {
  constructor(private readonly manageService: ManageService) {}

  @Mutation('createManage')
  create(@Args('createManageInput') createManageInput: CreateManageInput) {
    return this.manageService.create(createManageInput);
  }

  @Query('manage')
  findAll() {
    return this.manageService.findAll();
  }

  @Query('manage')
  findOne(@Args('id') id: number) {
    return this.manageService.findOne(id);
  }

  @Mutation('updateManage')
  update(@Args('updateManageInput') updateManageInput: UpdateManageInput) {
    return this.manageService.update(updateManageInput.id, updateManageInput);
  }

  @Mutation('removeManage')
  remove(@Args('id') id: number) {
    return this.manageService.remove(id);
  }
}
