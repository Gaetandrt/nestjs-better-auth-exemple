import { ApiProperty } from '@nestjs/swagger'
import { IsNotEmpty, IsString, IsUUID } from 'class-validator'

export class CreatePurchaseHistoryItemDto {
  @ApiProperty()
  @IsUUID()
  @IsNotEmpty()
  article_id: string

  @ApiProperty()
  @IsUUID()
  @IsNotEmpty()
  purchase_history_id: string

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  quantity: string
}
