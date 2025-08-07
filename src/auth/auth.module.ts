import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { JwtModule } from '@nestjs/jwt';
import { JwtService } from './jwt.service';
import { CacheModule } from '@nestjs/cache-manager';

@Module({
  imports:[
    CacheModule.register(),
    JwtModule.register({
      secret:'123',
      signOptions:{expiresIn:'1h'}
    })
  ],
  providers: [AuthService,JwtService],
  controllers: [AuthController]
})
export class AuthModule {}
