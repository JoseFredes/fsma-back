import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    JwtModule.register({
      secret: process.env.JWT_SECRET,
      signOptions: { expiresIn: '7h' },
    }),
  ],
  exports: [JwtModule], // Exporta JwtModule para que pueda ser importado por otros módulos
})
export class AppJwtModule {}
