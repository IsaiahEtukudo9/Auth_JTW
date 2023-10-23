import { Controller, Get, Request, Post, UseGuards } from '@nestjs/common';
import { AppService } from './app.service';
import { localAuthGuard } from './auth/local-auth.guard';
import { AuthenticatedGuard } from './auth/authenticated.guard';
import { AuthService } from './auth/auth.service';
import { JwtAuthGuard } from './auth/jwt.auth.guard';

@Controller()
export class AppController {
  constructor(private readonly authService: AuthService) {}


  //Post login
  @UseGuards(localAuthGuard)
  @Post('login')
  login(@Request() req): any {
    return this.authService.login(req.user);     //TODO: return JWT access token
  }


  //Get Protected
  @UseGuards(JwtAuthGuard)
  @Get('protected')
  getHello(@Request() req): string {          // TODO: require an Bearer token, a be a valid token
    return req.user;
  }
}
