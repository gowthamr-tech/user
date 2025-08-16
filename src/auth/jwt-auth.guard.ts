import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class JwtAuthGuard implements CanActivate {
  constructor(private jwtService: JwtService) {}
  canActivate(context: ExecutionContext) {
    const request = context.switchToHttp().getRequest();
    const permission = ['Admin', 'Manager', 'CEO', 'CTO'];
    let authHeader;
    if (request?.headers) authHeader = request.headers.authorization;
    else return true;
    console.log('Auth Header ', authHeader);
    try {
      if(permission.includes('CEO')){
        console.log("Hello")
      }
      const token = authHeader?.split(' ')[1];
      if (!token) authHeader?.split(' ')[1];
      const decoded = this.jwtService.verify(token);
      request.user = decoded;

      console.log("ROle of the User We Got ",decoded)
    } catch (err) {
      throw new UnauthorizedException('The Token invalid');
    }

    return true;
  }
}
