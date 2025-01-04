import { ResponseDTO } from '@dto/response.dto'
import { HttpStatus, Injectable, NotFoundException } from '@nestjs/common'
import { PrismaService } from 'src/prisma.service'

@Injectable()
export class CategoriesService {
  constructor(private readonly prisma: PrismaService) {}

  async findAll() {
    const categories = await this.prisma.article_category.findMany()

    if (!categories) {
      throw new NotFoundException('Categories not found')
    }

    return new ResponseDTO(HttpStatus.OK, 'Categories retreived', categories)
  }

  async findOne(id: string) {
    const category = await this.prisma.article_category.findUnique({
      where: { id }
    })

    if (!category) {
      throw new NotFoundException('Category not found')
    }

    return new ResponseDTO(HttpStatus.OK, 'Category retreived', category)
  }
}
