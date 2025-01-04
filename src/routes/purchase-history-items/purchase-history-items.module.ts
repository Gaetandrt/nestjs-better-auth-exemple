import { Module } from '@nestjs/common'
import { PrismaService } from 'src/prisma.service'
import { PurchaseHistoryItemsController } from './purchase-history-items.controller'
import { PurchaseHistoryItemsService } from './purchase-history-items.service'

@Module({
  controllers: [PurchaseHistoryItemsController],
  providers: [PurchaseHistoryItemsService, PrismaService]
})
export class PurchaseHistoryItemsModule {}
