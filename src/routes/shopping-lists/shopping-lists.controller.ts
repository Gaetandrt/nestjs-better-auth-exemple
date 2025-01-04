import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common'
import { ApiTags } from '@nestjs/swagger'
import { CreateShoppingListDto } from './dto/create-shopping-list.dto'
import { UpdateShoppingListDto } from './dto/update-shopping-list.dto'
import { ShoppingListsService } from './shopping-lists.service'

@Controller('shopping-lists')
@ApiTags('shopping-lists')
export class ShoppingListsController {
  constructor(private readonly shoppingListsService: ShoppingListsService) {}

  @Post()
  create(@Body() createShoppingListDto: CreateShoppingListDto) {
    return this.shoppingListsService.create(createShoppingListDto)
  }

  @Get()
  findAll() {
    return this.shoppingListsService.findAll()
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.shoppingListsService.findOne(id)
  }

  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() updateShoppingListDto: UpdateShoppingListDto
  ) {
    return this.shoppingListsService.update(id, updateShoppingListDto)
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.shoppingListsService.remove(id)
  }
}
