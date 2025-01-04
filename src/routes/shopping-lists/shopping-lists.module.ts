import { Module } from '@nestjs/common'
import { PrismaService } from 'src/prisma.service'
import { ShoppingListsController } from './shopping-lists.controller'
import { ShoppingListsService } from './shopping-lists.service'

@Module({
  controllers: [ShoppingListsController],
  providers: [ShoppingListsService, PrismaService]
})
export class ShoppingListsModule {}
