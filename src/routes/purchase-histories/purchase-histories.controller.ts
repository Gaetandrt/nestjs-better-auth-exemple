import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common'
import { ApiTags } from '@nestjs/swagger'
import { CreatePurchaseHistoryDto } from './dto/create-purchase-history.dto'
import { UpdatePurchaseHistoryDto } from './dto/update-purchase-history.dto'
import { PurchaseHistoriesService } from './purchase-histories.service'

@Controller('purchase-histories')
@ApiTags('purchase-histories')
export class PurchaseHistoriesController {
  constructor(
    private readonly purchaseHistoriesService: PurchaseHistoriesService
  ) {}

  @Post()
  create(@Body() createPurchaseHistoryDto: CreatePurchaseHistoryDto) {
    return this.purchaseHistoriesService.create(createPurchaseHistoryDto)
  }

  @Get()
  findAll() {
    return this.purchaseHistoriesService.findAll()
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.purchaseHistoriesService.findOne(id)
  }

  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() updatePurchaseHistoryDto: UpdatePurchaseHistoryDto
  ) {
    return this.purchaseHistoriesService.update(id, updatePurchaseHistoryDto)
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.purchaseHistoriesService.remove(id)
  }
}
