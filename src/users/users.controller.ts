import { Param, Request, ValidationPipe } from '@nestjs/common';
import { UseGuards } from '@nestjs/common';
import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateUserDto } from './dto/createpuser.dto';
import { UsersService } from './users.service';
import { AuthGuard } from '@nestjs/passport';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  findAll() {
    return this.usersService.findAll();
  }
  @Get(':username')
  @UseGuards(AuthGuard('jwt'))
  findOne(@Param('username') username: string) {
    // return req.user;
    return this.usersService.findOne(username);
  }

  @Post()
  create(@Body(ValidationPipe) createUser: CreateUserDto) {
    return this.usersService.create(createUser);
  }
}
