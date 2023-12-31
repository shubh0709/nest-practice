import {
  Controller,
  Post,
  Body,
  Get,
  Patch,
  Delete,
  Query,
  Param,
  NotFoundException,
} from '@nestjs/common';
import { CreateUserDto } from './dtos/create-user.dto';
import { UsersService } from './users.service';
import { Users } from './users.entity';
import { UseInterceptors, ClassSerializerInterceptor } from '@nestjs/common';
import { UpdateUserDto } from './dtos/update-user.dto';
@Controller('auth')
export class UsersController {
  constructor(private usersService: UsersService) {}
  @Post('/signup')
  createUser(@Body() body: CreateUserDto) {
    this.usersService.create(body.email, body.password);
  }

  @Get('/:id')
  // @UseInterceptors(ClassSerializerInterceptor)
  findUser(@Param('id') id: string) {
    console.log('controller findUser id: ', id);
    const user = this.usersService.findOne(parseInt(id));

    if (!user) {
      throw new NotFoundException('user not found');
    }

    return user;
  }

  @Delete('/:id')
  deleteUser(@Param('id') id: string) {
    console.log('controller deleteUser id: ', id);
    this.usersService.remove(parseInt(id));
  }

  @Patch('/:id')
  updateUser(@Param('id') id: string, @Body() body: UpdateUserDto) {
    console.log('controller updateUser id: ', id);
    this.usersService.update(parseInt(id), body);
  }

  @Get()
  findAllUsers(@Query('email') email: string) {
    console.log('controller findAllUser email: ', email);
    return this.usersService.find(email);
  }
}
