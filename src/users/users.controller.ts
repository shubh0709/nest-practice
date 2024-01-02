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
  Session,
} from '@nestjs/common';
import { CreateUserDto } from './dtos/create-user.dto';
import { UsersService } from './users.service';
import { Users } from './users.entity';
import { UseInterceptors, ClassSerializerInterceptor } from '@nestjs/common';
import { UpdateUserDto } from './dtos/update-user.dto';
import { CustomSerialize } from 'src/serializers/custom.serializer';
import { UserDto } from './dtos/user.dto';
import { AuthService } from './auth.service';
@Controller('auth')
export class UsersController {
  constructor(
    private usersService: UsersService,
    private authService: AuthService,
  ) {}

  // @Get('/whoami')
  // @UseGuards(AuthGuard)
  // whoAmI(@CurrentUser() user: Users) {
  //   return user;
  // }

  @Post('/signout')
  signOut(@Session() session: any) {
    session.userId = null;
  }

  @Post('/signup')
  async createUser(@Body() body: CreateUserDto, @Session() session: any) {
    const user = await this.authService.signup(body.email, body.password);
    console.log('userId: ', user.id);
    // console.log("userId: ", user.id);
    console.log({session});
    session[`userId`] = user.id;
    return user;
  }

  @Post('/signin')
  async signin(@Body() body: CreateUserDto, @Session() session: any) {
    const user = await this.authService.signin(body.email, body.password);
    session.userId = user.id;
    return user;
  }

  @Get('/:id')
  // @UseInterceptors(ClassSerializerInterceptor)
  @CustomSerialize(UserDto)
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
