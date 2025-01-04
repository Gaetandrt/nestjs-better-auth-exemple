import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common'
import { ApiTags } from '@nestjs/swagger'
import { CreatePurchaseHistoryItemDto } from './dto/create-purchase-history-item.dto'
import { UpdatePurchaseHistoryItemDto } from './dto/update-purchase-history-item.dto'
import { PurchaseHistoryItemsService } from './purchase-history-items.service'

@Controller('purchase-history-items')
@ApiTags('purchase-history-items')
export class PurchaseHistoryItemsController {
  constructor(
    private readonly purchaseHistoryItemsService: PurchaseHistoryItemsService
  ) {}

  @Post()
  create(@Body() createPurchaseHistoryItemDto: CreatePurchaseHistoryItemDto) {
    return this.purchaseHistoryItemsService.create(createPurchaseHistoryItemDto)
  }

  @Get()
  findAll() {
    return this.purchaseHistoryItemsService.findAll()
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.purchaseHistoryItemsService.findOne(id)
  }

  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() updatePurchaseHistoryItemDto: UpdatePurchaseHistoryItemDto
  ) {
    return this.purchaseHistoryItemsService.update(
      id,
      updatePurchaseHistoryItemDto
    )
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.purchaseHistoryItemsService.remove(id)
  }
}
