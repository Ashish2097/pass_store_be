import {
  Body,
  Controller,
  Get,
  Post,
  UseGuards,
  Request,
} from '@nestjs/common';
import { AuthService } from './auth/auth.service';
import { JwtAuthGuard } from './auth/jwt-auth.guard';
import { LocalAuthGuard } from './auth/local-auth.guard';
import { PassService } from './pass/pass.service';

@Controller()
export class AppController {
  constructor(
    private authService: AuthService,
    private passService: PassService,
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

  @UseGuards(JwtAuthGuard)
  @Get('auth/get-passwords')
  async getPasswords(@Request() req) {
    return this.passService.getPasswords(req.user);
  }
}
