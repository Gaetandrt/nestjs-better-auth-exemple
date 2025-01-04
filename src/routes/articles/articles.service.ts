import { ResponseDTO } from '@dto/response.dto'
import { HttpStatus, Injectable, NotFoundException } from '@nestjs/common'
import { PrismaService } from 'src/prisma.service'

@Injectable()
export class ArticlesService {
  constructor(private readonly prisma: PrismaService) {}

  async findAll() {
    const articles = await this.prisma.article.findMany()

    if (!articles) {
      throw new NotFoundException('Articles not found')
    }

    return new ResponseDTO(HttpStatus.OK, 'Articles retreived', articles)
  }

  async findOne(id: string) {
    const article = await this.prisma.article.findUnique({
      where: { id }
    })

    if (!article) {
      throw new NotFoundException('Article not found')
    }

    return new ResponseDTO(HttpStatus.OK, 'Article retreived', article)
  }
}
