// src/user/user.controller.ts
import { Controller, Post, Body } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('auth')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('login')
  async login(@Body() body: { email: string; password: string }) {
    const { email, password } = body;
    const user = await this.userService.login(email, password);
    
    if (!user) {
      return { message: 'Invalid credentials' };
    }
    
    return { message: 'Login successful', user };
  }
}
