import { ApiProperty } from '@nestjs/swagger'
import { IsBoolean, IsOptional, IsString, IsUUID } from 'class-validator'

export class UpdateArticleItemDto {
  @ApiProperty({ required: false })
  @IsUUID()
  @IsOptional()
  shopping_list_id?: string

  @ApiProperty({ required: false })
  @IsUUID()
  @IsOptional()
  article_id?: string

  @ApiProperty({ required: false })
  @IsBoolean()
  @IsOptional()
  checked?: boolean

  @ApiProperty({ required: false })
  @IsString()
  @IsOptional()
  quantity?: string

  @ApiProperty({ required: false })
  @IsOptional()
  updated_at?: Date
}
