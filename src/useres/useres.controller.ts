import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { UseresService } from './useres.service';
import { CreateUsereDto } from './dto/create-usere.dto';
import { UpdateUsereDto } from './dto/update-usere.dto';

@Controller('useres')
export class UseresController {
  constructor(private readonly useresService: UseresService) { }

  @Post()
  create(@Body() createUsereDto: CreateUsereDto) {
    return this.useresService.create(createUsereDto);
  }


  @Get()
  findAll() {
    return this.useresService.find();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.useresService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateUsereDto: UpdateUsereDto) {
    return this.useresService.update(id, updateUsereDto);
  }



  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.useresService.remove(id);
  }
}
