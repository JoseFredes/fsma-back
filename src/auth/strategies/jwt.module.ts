import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    JwtModule.registerAsync({
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        secret: configService.get('JWT_SECRET'),
        signOptions: { expiresIn: '7h' },
      }),
    }),
  ],
  exports: [JwtModule], // Exporta JwtModule para que pueda ser importado por otros módulos
})
export class AppJwtModule {}
