import { ResponseDTO } from '@dto/response.dto'
import { HttpStatus, Injectable, NotFoundException } from '@nestjs/common'
import { PrismaService } from 'src/prisma.service'
import { CreatePurchaseHistoryDto } from './dto/create-purchase-history.dto'
import { UpdatePurchaseHistoryDto } from './dto/update-purchase-history.dto'

@Injectable()
export class PurchaseHistoriesService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createPurchaseHistoryDto: CreatePurchaseHistoryDto) {
    const purchaseHistory = await this.prisma.purchase_history.create({
      data: createPurchaseHistoryDto,
      include: {
        user: true,
        shopping_list: true,
        purchase_history_item: {
          include: {
            article: true
          }
        }
      }
    })

    return new ResponseDTO(
      HttpStatus.CREATED,
      'Purchase history created',
      purchaseHistory
    )
  }

  async findAll() {
    const purchaseHistories = await this.prisma.purchase_history.findMany({
      include: {
        user: true,
        shopping_list: true,
        purchase_history_item: {
          include: {
            article: true
          }
        }
      }
    })

    if (!purchaseHistories) {
      throw new NotFoundException('Purchase histories not found')
    }

    return new ResponseDTO(
      HttpStatus.OK,
      'Purchase histories retrieved',
      purchaseHistories
    )
  }

  async findOne(id: string) {
    const purchaseHistory = await this.prisma.purchase_history.findUnique({
      where: { id },
      include: {
        user: true,
        shopping_list: true,
        purchase_history_item: {
          include: {
            article: true
          }
        }
      }
    })

    if (!purchaseHistory) {
      throw new NotFoundException('Purchase history not found')
    }

    return new ResponseDTO(
      HttpStatus.OK,
      'Purchase history retrieved',
      purchaseHistory
    )
  }

  async update(id: string, updatePurchaseHistoryDto: UpdatePurchaseHistoryDto) {
    const purchaseHistory = await this.prisma.purchase_history.update({
      where: { id },
      data: updatePurchaseHistoryDto,
      include: {
        user: true,
        shopping_list: true,
        purchase_history_item: {
          include: {
            article: true
          }
        }
      }
    })

    return new ResponseDTO(
      HttpStatus.OK,
      'Purchase history updated',
      purchaseHistory
    )
  }

  async remove(id: string) {
    await this.prisma.purchase_history.delete({
      where: { id }
    })

    return new ResponseDTO(HttpStatus.OK, 'Purchase history deleted', null)
  }
}
