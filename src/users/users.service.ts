import { HttpStatus, Injectable, Logger, OnModuleInit } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaClient } from '@prisma/client';
import { RpcException } from '@nestjs/microservices';
import { PaginationDto } from 'src/common/dto';
import { last } from 'rxjs';

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

  async findAll(paginationDto: PaginationDto) {
    const { page, limit } = paginationDto;
    const totalPages = await this.user.count();
    const lastPage = Math.ceil( totalPages / limit);

    return {
      data: await this.user.findMany({
        skip: (page - 1 ) * limit,
        take: limit
      }),
      meta: {
        total: totalPages,
        page: page, 
        lastPage  : lastPage
      }
    }
  }

  async findOne(id: number) {
    const user = await this.user.findFirst({
      where: { id, available: true }
    });

    if( !user ){
      throw new RpcException({
        message: `User with id #${ id } not found!`,
        status: HttpStatus.BAD_REQUEST
    });
    }
    return user;
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
  //TODO validar que si todos los campos vienen en null no llame al sig código
    const { id: __,  ...data } = updateUserDto

    await this.findOne(id);

    return this.user.update({
      where: { id },
      data: data
    })
  }

  async remove(id: number) {
      await this.findOne(id);
      
      const user = await this.user.update({
        where: { id },
        data: {
          available: false
        }
      }); 
      return user
  }
}
