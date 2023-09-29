import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SssService } from './sss.service';
import { CreateSssDto } from './dto/create-sss.dto';
import { UpdateSssDto } from './dto/update-sss.dto';

@Controller('sss')
export class SssController {
  constructor(private readonly sssService: SssService) {}

  @Post()
  create(@Body() createSssDto: CreateSssDto) {
    return this.sssService.create(createSssDto);
  }

  @Get()
  findAll() {
    return this.sssService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.sssService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSssDto: UpdateSssDto) {
    return this.sssService.update(+id, updateSssDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.sssService.remove(+id);
  }
}
