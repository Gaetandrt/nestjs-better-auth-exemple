import { Module } from '@nestjs/common'
import { PrismaService } from 'src/prisma.service'
import { PurchaseHistoriesController } from './purchase-histories.controller'
import { PurchaseHistoriesService } from './purchase-histories.service'

@Module({
  controllers: [PurchaseHistoriesController],
  providers: [PurchaseHistoriesService, PrismaService]
})
export class PurchaseHistoriesModule {}
