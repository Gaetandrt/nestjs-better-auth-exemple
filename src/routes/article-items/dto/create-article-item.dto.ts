import { ApiProperty } from '@nestjs/swagger'
import { IsBoolean, IsNotEmpty, IsString, IsUUID } from 'class-validator'

export class CreateArticleItemDto {
  @ApiProperty()
  @IsUUID()
  @IsNotEmpty()
  shopping_list_id: string

  @ApiProperty()
  @IsUUID()
  @IsNotEmpty()
  article_id: string

  @ApiProperty()
  @IsBoolean()
  @IsNotEmpty()
  checked: boolean = false

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  quantity: string
}
