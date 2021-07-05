import { Body, ValidationPipe } from '@nestjs/common';
import { Controller, Post } from '@nestjs/common';
import { CreateUserDto } from 'src/users/dto/createpuser.dto';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}
  @Post('login')
  create(@Body(ValidationPipe) createUser: CreateUserDto) {
    return this.authService.login(createUser);
  }
}
