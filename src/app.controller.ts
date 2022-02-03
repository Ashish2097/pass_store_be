import {
  Body,
  Controller,
  Get,
  Post,
  UseGuards,
  Request,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AppService } from './app.service';
import { AuthService } from './auth/auth.service';
import { JwtAuthGuard } from './auth/jwt-auth.guard';
import { LocalAuthGuard } from './auth/local-auth.guard';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private authService: AuthService,
  ) {}

  @UseGuards(JwtAuthGuard)
  @Get()
  getHello(@Request() req): string {
    // return this.appService.getHello();
    return req.user;
  }

  @UseGuards(LocalAuthGuard)
  @Post('auth/login')
  async login(@Request() req) {
    return this.authService.login(req.user);
  }

  @Get('login')
  getAnotherHello(): string {
    return 'heeeloo';
  }

  // @Post('login')
  // login(@Body() body) {
  //   const { email, password } = body;
  //   if (email === 'ashishduklann@gmail.com' && password === '1234') {
  //     return {
  //       accessToken: 'accessToken',
  //     };
  //   }
  // }
}
