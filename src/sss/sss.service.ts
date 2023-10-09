import { Injectable } from '@nestjs/common';
import { CreateSssInput } from './dto/create-sss.input';
import { UpdateSssInput } from './dto/update-sss.input';

@Injectable()
export class SssService {
  create(createSssInput: CreateSssInput) {
    return 'This action adds a new sss';
  }

  findAll() {
    return `This action returns all sss`;
  }

  findOne(id: number) {
    return `This action returns a #${id} sss`;
  }

  update(id: number, updateSssInput: UpdateSssInput) {
    return `This action updates a #${id} sss`;
  }

  remove(id: number) {
    return `This action removes a #${id} sss`;
  }
}
