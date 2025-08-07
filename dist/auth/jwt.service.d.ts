import * as jwt from 'jsonwebtoken';
export declare class JwtService {
    private readonly secret;
    sign(payload: any): string;
    verify(token: string): string | jwt.JwtPayload;
}
