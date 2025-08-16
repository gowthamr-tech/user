import { CreateManageInput } from './create-manage.input';
import { PartialType } from '@nestjs/mapped-types';

export class UpdateManageInput extends PartialType(CreateManageInput) {
  id: number;
}
