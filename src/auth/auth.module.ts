import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { JwtModule } from '@nestjs/jwt';
import { JwtService } from './jwt.service';
import { CacheModule } from '@nestjs/cache-manager';
import { APP_GUARD } from '@nestjs/core';
import { JwtAuthGuard } from './jwt-auth.guard';

@Module({
  imports:[
    CacheModule.register(),
    JwtModule.register({
      secret:'123',
      signOptions:{expiresIn:'1h'}
    }),
    
  ],
  providers: [AuthService,JwtService,
       {
        provide:APP_GUARD,
        useClass:JwtAuthGuard
      }
  ],
  controllers: [AuthController]
})
export class AuthModule {}
