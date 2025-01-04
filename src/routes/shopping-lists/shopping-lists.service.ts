import { ResponseDTO } from '@dto/response.dto'
import { HttpStatus, Injectable, NotFoundException } from '@nestjs/common'
import { PrismaService } from 'src/prisma.service'
import { CreateShoppingListDto } from './dto/create-shopping-list.dto'
import { UpdateShoppingListDto } from './dto/update-shopping-list.dto'

@Injectable()
export class ShoppingListsService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createShoppingListDto: CreateShoppingListDto) {
    const shoppingList = await this.prisma.shopping_list.create({
      data: createShoppingListDto
    })

    return new ResponseDTO(
      HttpStatus.CREATED,
      'Shopping list created',
      shoppingList
    )
  }

  async findAll() {
    const shoppingLists = await this.prisma.shopping_list.findMany({
      include: {
        article_item: true
      }
    })

    if (!shoppingLists) {
      throw new NotFoundException('Shopping lists not found')
    }

    return new ResponseDTO(
      HttpStatus.OK,
      'Shopping lists retrieved',
      shoppingLists
    )
  }

  async findOne(id: string) {
    const shoppingList = await this.prisma.shopping_list.findUnique({
      where: { id },
      include: {
        article_item: true
      }
    })

    if (!shoppingList) {
      throw new NotFoundException('Shopping list not found')
    }

    return new ResponseDTO(
      HttpStatus.OK,
      'Shopping list retrieved',
      shoppingList
    )
  }

  async update(id: string, updateShoppingListDto: UpdateShoppingListDto) {
    const shoppingList = await this.prisma.shopping_list.update({
      where: { id },
      data: updateShoppingListDto
    })

    return new ResponseDTO(HttpStatus.OK, 'Shopping list updated', shoppingList)
  }

  async remove(id: string) {
    await this.prisma.shopping_list.delete({
      where: { id }
    })

    return new ResponseDTO(HttpStatus.OK, 'Shopping list deleted', null)
  }
}
