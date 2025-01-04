import { Module } from '@nestjs/common'
import { ArticlesController } from './articles.controller'
import { ArticlesService } from './articles.service'
import { PrismaService } from 'src/prisma.service'

@Module({
  controllers: [ArticlesController],
  providers: [ArticlesService, PrismaService]
})
export class ArticlesModule {}
