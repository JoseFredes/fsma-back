import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { User } from 'src/entities/user.entities';
import { AuthService } from 'src/auth/auth.services';
import { AppJwtModule } from 'src/auth/strategies/jwt.module';

@Module({
  imports: [TypeOrmModule.forFeature([User]), AppJwtModule],
  providers: [UsersService, AuthService],
  controllers: [UsersController],
})
export class UsersModule {}
