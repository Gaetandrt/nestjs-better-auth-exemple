import { Module } from '@nestjs/common'
import { PrismaService } from 'src/prisma.service'
import { ArticleItemsController } from './article-items.controller'
import { ArticleItemsService } from './article-items.service'

@Module({
  controllers: [ArticleItemsController],
  providers: [ArticleItemsService, PrismaService]
})
export class ArticleItemsModule {}
