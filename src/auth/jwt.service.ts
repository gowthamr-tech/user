import { Injectable, UnauthorizedException } from "@nestjs/common";
import * as jwt from 'jsonwebtoken';


@Injectable()
export class JwtService{
    private readonly secret='123';
    sign(payload:any){
        return jwt.sign(payload,this.secret,{expiresIn:'1h'});
    }

    verify(token:string){
        try{
            return jwt.verify(token,this.secret);

        }
        catch{
            throw new UnauthorizedException();
        }
    }
}