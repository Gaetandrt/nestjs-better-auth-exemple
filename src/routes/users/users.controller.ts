import { Body, Controller, Get, Logger, Post } from '@nestjs/common'
import { ApiTags } from '@nestjs/swagger'

import { AuthService } from '@routes/auth/auth.service'
import { UsersService } from './users.service'

@Controller('users')
@ApiTags('users')
export class UsersController {
  constructor(
    private readonly usersService: UsersService,
    private readonly authService: AuthService
  ) {}
  private readonly logger = new Logger(UsersController.name)

  @Get()
  findAll() {
    return this.usersService.findAll()
  }

  @Post('signup')
  async signup(@Body() body: any) {
    this.logger.log('signup')
    console.log(body)
  }
}
