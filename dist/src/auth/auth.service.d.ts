import { JwtService } from '@nestjs/jwt';
import { Cache } from 'cache-manager';
export declare class AuthService {
    private jwtService;
    private cacheManager;
    constructor(jwtService: JwtService, cacheManager: Cache);
    validateUser(username: string, pass: string): Promise<void>;
    checkCaching(input: any): Promise<void>;
    getCaching(user: any): Promise<unknown>;
}
