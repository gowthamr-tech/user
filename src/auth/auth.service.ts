import { CACHE_MANAGER } from '@nestjs/cache-manager';
import { Inject, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Cache } from 'cache-manager';

@Injectable()
export class AuthService {
  constructor(
    private jwtService: JwtService,
    @Inject(CACHE_MANAGER) private cacheManager: Cache,
  ) {}

  async validateUser(username: string, pass: string) {
    if (username == 'admin' && pass == 'admin') {
    }
  }

  async checkCaching(input) {
    console.log('Entered into check Caching', input);
    await this.cacheManager.set(input.user, input.password);
    // await this.cacheManager.del(input.user);
  }

  async getCaching(user) {
    const value = await this.cacheManager.get(user);
    return value;
  }
}
