import { Injectable, Logger, NotFoundException, OnModuleInit } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class UsersService extends PrismaClient implements OnModuleInit {

  private readonly logger = new Logger('ProductsService');

  onModuleInit() {
    this.$connect();
    this.logger.log('Database connected');
  }

  create(createUserDto: CreateUserDto) {
    return this.user.create({
      data: createUserDto
    });
  }

  findAll() {
    //TODO codigo incompleto de paginacion v 15
    //const { page, limit } = paginationDto;
    //const totalPage = await this.product.count();
    //lastPage = Math.ceil( totalPages / limit);

    return this.user.findMany({
      // skip: 1*10,  (page - 1 ) * limit;
      // take: limit
    });
  }

  async findOne(id: number) {
    const user = await this.user.findUnique({
      where: { id }
    });

    if( !user ){
      throw new NotFoundException(`Product with id #${ id } not found`);
    }

    return user;
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
  //TODO validar que si todos los campos vienen en null no llame al sig código

    await this.findOne(id);

    return this.user.update({
      where: { id },
      data: updateUserDto
    })
  }

  async remove(id: number) {

      await this.findOne(id)
      
      return this.user.delete({
        where: { id }
      });
  }
}
