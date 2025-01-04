import { ResponseDTO } from '@dto/response.dto'
import { HttpStatus, Injectable, NotFoundException } from '@nestjs/common'
import { PrismaService } from 'src/prisma.service'
import { CreateArticleItemDto } from './dto/create-article-item.dto'
import { UpdateArticleItemDto } from './dto/update-article-item.dto'

@Injectable()
export class ArticleItemsService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createArticleItemDto: CreateArticleItemDto) {
    const articleItem = await this.prisma.article_item.create({
      data: createArticleItemDto,
      include: {
        article: true,
        shopping_list: true
      }
    })

    return new ResponseDTO(
      HttpStatus.CREATED,
      'Article item created',
      articleItem
    )
  }

  async findAll() {
    const articleItems = await this.prisma.article_item.findMany({
      include: {
        article: true,
        shopping_list: true
      }
    })

    if (!articleItems) {
      throw new NotFoundException('Article items not found')
    }

    return new ResponseDTO(
      HttpStatus.OK,
      'Article items retrieved',
      articleItems
    )
  }

  async findOne(id: string) {
    const articleItem = await this.prisma.article_item.findUnique({
      where: { id },
      include: {
        article: true,
        shopping_list: true
      }
    })

    if (!articleItem) {
      throw new NotFoundException('Article item not found')
    }

    return new ResponseDTO(HttpStatus.OK, 'Article item retrieved', articleItem)
  }

  async update(id: string, updateArticleItemDto: UpdateArticleItemDto) {
    const articleItem = await this.prisma.article_item.update({
      where: { id },
      data: updateArticleItemDto,
      include: {
        article: true,
        shopping_list: true
      }
    })

    return new ResponseDTO(HttpStatus.OK, 'Article item updated', articleItem)
  }

  async remove(id: string) {
    await this.prisma.article_item.delete({
      where: { id }
    })

    return new ResponseDTO(HttpStatus.OK, 'Article item deleted', null)
  }
}
