import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'

import { ArticleItemsModule } from '@routes/article-items/article-items.module'
import { ArticlesModule } from '@routes/articles/articles.module'
import { AuthModule } from '@routes/auth/auth.module'
import { CategoriesModule } from '@routes/categories/categories.module'
import { PurchaseHistoriesModule } from '@routes/purchase-histories/purchase-histories.module'
import { PurchaseHistoryItemsModule } from '@routes/purchase-history-items/purchase-history-items.module'
import { ShoppingListsModule } from '@routes/shopping-lists/shopping-lists.module'
import { UsersModule } from '@routes/users/users.module'
import { config } from './config/config'

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [config],
      validate: (config) => {
        console.log('config', config)

        if (!config.PORT) {
          throw new Error('PORT is not defined')
        }

        return config
      },
      envFilePath: ['.env', '.env.local']
    }),
    UsersModule,
    AuthModule,
    CategoriesModule,
    ArticlesModule,
    PurchaseHistoriesModule,
    PurchaseHistoryItemsModule,
    ShoppingListsModule,
    ArticleItemsModule
  ]
})
export class AppModule {}
