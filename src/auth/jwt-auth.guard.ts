import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Observable } from 'rxjs';

@Injectable()
export class JwtAuthGuard implements CanActivate {
  constructor(private jwtService: JwtService) {}
  canActivate(context: ExecutionContext) {
    const request = context.switchToHttp().getRequest();
    const authHeader = request.headers.authorization;
    console.log('Auth Header ', authHeader);
    try {
      const token = authHeader?.split(' ')[1];
      if (!token) authHeader?.split(' ')[1];
      const decoded = this.jwtService.verify(token);
      request.user = decoded;
    } catch (err) {
      throw new UnauthorizedException('The Token invalid');
    }

    return true;
  }
}
