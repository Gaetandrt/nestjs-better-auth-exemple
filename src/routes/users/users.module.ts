import { Module } from '@nestjs/common'

import { AuthService } from '@routes/auth/auth.service'
import { PrismaService } from 'src/prisma.service'
import { UsersController } from './users.controller'
import { UsersService } from './users.service'

@Module({
  controllers: [UsersController],
  providers: [UsersService, PrismaService, AuthService],
  exports: [UsersService]
})
export class UsersModule {}
