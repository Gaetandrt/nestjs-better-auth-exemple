import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common'
import { ApiTags } from '@nestjs/swagger'
import { ArticleItemsService } from './article-items.service'
import { CreateArticleItemDto } from './dto/create-article-item.dto'
import { UpdateArticleItemDto } from './dto/update-article-item.dto'

@Controller('article-items')
@ApiTags('article-items')
export class ArticleItemsController {
  constructor(private readonly articleItemsService: ArticleItemsService) {}

  @Post()
  create(@Body() createArticleItemDto: CreateArticleItemDto) {
    return this.articleItemsService.create(createArticleItemDto)
  }

  @Get()
  findAll() {
    return this.articleItemsService.findAll()
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.articleItemsService.findOne(id)
  }

  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() updateArticleItemDto: UpdateArticleItemDto
  ) {
    return this.articleItemsService.update(id, updateArticleItemDto)
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.articleItemsService.remove(id)
  }
}
