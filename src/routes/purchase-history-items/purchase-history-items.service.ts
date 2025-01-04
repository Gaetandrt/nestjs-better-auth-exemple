import { ResponseDTO } from '@dto/response.dto'
import { HttpStatus, Injectable, NotFoundException } from '@nestjs/common'
import { PrismaService } from 'src/prisma.service'
import { CreatePurchaseHistoryItemDto } from './dto/create-purchase-history-item.dto'
import { UpdatePurchaseHistoryItemDto } from './dto/update-purchase-history-item.dto'

@Injectable()
export class PurchaseHistoryItemsService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createPurchaseHistoryItemDto: CreatePurchaseHistoryItemDto) {
    const purchaseHistoryItem = await this.prisma.purchase_history_item.create({
      data: createPurchaseHistoryItemDto,
      include: {
        article: true,
        purchase_history: true
      }
    })

    return new ResponseDTO(
      HttpStatus.CREATED,
      'Purchase history item created',
      purchaseHistoryItem
    )
  }

  async findAll() {
    const purchaseHistoryItems =
      await this.prisma.purchase_history_item.findMany({
        include: {
          article: true,
          purchase_history: true
        }
      })

    if (!purchaseHistoryItems) {
      throw new NotFoundException('Purchase history items not found')
    }

    return new ResponseDTO(
      HttpStatus.OK,
      'Purchase history items retrieved',
      purchaseHistoryItems
    )
  }

  async findOne(id: string) {
    const purchaseHistoryItem =
      await this.prisma.purchase_history_item.findUnique({
        where: { id },
        include: {
          article: true,
          purchase_history: true
        }
      })

    if (!purchaseHistoryItem) {
      throw new NotFoundException('Purchase history item not found')
    }

    return new ResponseDTO(
      HttpStatus.OK,
      'Purchase history item retrieved',
      purchaseHistoryItem
    )
  }

  async update(
    id: string,
    updatePurchaseHistoryItemDto: UpdatePurchaseHistoryItemDto
  ) {
    const purchaseHistoryItem = await this.prisma.purchase_history_item.update({
      where: { id },
      data: updatePurchaseHistoryItemDto,
      include: {
        article: true,
        purchase_history: true
      }
    })

    return new ResponseDTO(
      HttpStatus.OK,
      'Purchase history item updated',
      purchaseHistoryItem
    )
  }

  async remove(id: string) {
    await this.prisma.purchase_history_item.delete({
      where: { id }
    })

    return new ResponseDTO(HttpStatus.OK, 'Purchase history item deleted', null)
  }
}
