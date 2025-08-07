import { AuthService } from './auth.service';
import { JwtService } from './jwt.service';
export declare class AuthController {
    private jwtService;
    private authService;
    constructor(jwtService: JwtService, authService: AuthService);
    login(req: any): Promise<string>;
    getProfile(req: any): any;
    pushCaching(input: any): Promise<void>;
    getCaching(username: string): Promise<unknown>;
}
