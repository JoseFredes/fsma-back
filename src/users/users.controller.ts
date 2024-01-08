import { Controller, Post, Body, HttpStatus, HttpCode } from '@nestjs/common';
import { UsersService } from './users.service';
import { AuthService } from 'src/auth/auth.services';

@Controller('users')
export class UsersController {
  constructor(
    private readonly usersService: UsersService,
    private authService: AuthService,
  ) {}

  @Post('register')
  async register(@Body() createUserDto: any) {
    const user = await this.usersService.create(createUserDto);
    return user; // Considera retornar solo los datos relevantes
  }

  @HttpCode(HttpStatus.OK)
  @Post('login')
  async login(@Body() loginDto: any) {
    const jwt = await this.authService.validateUser(
      loginDto.email,
      loginDto.password,
    );
    if (!jwt) {
      return 'Credenciales incorrectas';
    }
    return {
      access_token: jwt.access_token,
      id: jwt.id,
      email: jwt.email,
      firstName: jwt.firstName,
    };
  }
}
``;
