import { Injectable } from '@nestjs/common';
import { CreateUsereDto } from './dto/create-usere.dto';
import { UpdateUsereDto } from './dto/update-usere.dto';
import { PrismaService, } from 'src/prisma/prisma.service';
import { async } from 'rxjs';

@Injectable()
export class UseresService {
  constructor(private prisma: PrismaService) { }
  create(createUsereDto: CreateUsereDto) {
    return this.prisma.user.create({
      data: createUsereDto
    })

  }

  find() {
    return this.prisma.user.findMany();
  }

  async findOne(id: string) {
    return await this.prisma.user.findUnique({
      where: {
        id,
      },
    })
  }

  async update(id: string, updateUsereDto: UpdateUsereDto) {
   

    const updateUser = await this.prisma.user.update({
      where: {
        id,
      },
      data: {
        email:updateUsereDto.email
          
          
      }
  })
    return updateUser;
  }

  async remove(id: string) {
    await this.prisma.user.delete({
      where: {
        id,
      },
    });
  }
}
