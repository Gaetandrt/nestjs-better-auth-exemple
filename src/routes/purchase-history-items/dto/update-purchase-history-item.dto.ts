import { ApiProperty } from '@nestjs/swagger'
import { IsOptional, IsString, IsUUID } from 'class-validator'

export class UpdatePurchaseHistoryItemDto {
  @ApiProperty({ required: false })
  @IsUUID()
  @IsOptional()
  article_id?: string

  @ApiProperty({ required: false })
  @IsUUID()
  @IsOptional()
  purchase_history_id?: string

  @ApiProperty({ required: false })
  @IsString()
  @IsOptional()
  quantity?: string

  @ApiProperty({ required: false })
  @IsOptional()
  updated_at?: Date
}
