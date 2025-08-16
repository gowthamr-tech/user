import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Req,
  UseGuards,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { JwtAuthGuard } from './jwt-auth.guard';
import { JwtService } from './jwt.service';
import { Roles } from './roles.decorator';

@Controller('auth')
export class AuthController {
  constructor(
    private jwtService: JwtService,
    private authService: AuthService,
  ) {}

  @Post('login')
  // @Roles()
  async login(@Body() req) {
    console.log('The Request Body is here', req);
    return this.jwtService.sign(req);
  }

  @UseGuards(JwtAuthGuard)
  @Get('profile')
  getProfile(@Req() req) {
    console.log('ENtered into Controller');
    return req.user;
  }

  @Post('caching')
  async pushCaching(@Body() input: any) {
    return await this.authService.checkCaching(input);
  }

  @Get('getCache/:username')
  getCaching(@Param('username') username: string) {
    return this.authService.getCaching(username);
  }
}
