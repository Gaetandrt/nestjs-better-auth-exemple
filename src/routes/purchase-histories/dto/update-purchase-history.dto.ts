import { ApiProperty } from '@nestjs/swagger'
import { IsOptional, IsString, IsUUID } from 'class-validator'

export class UpdatePurchaseHistoryDto {
  @ApiProperty({ required: false })
  @IsString()
  @IsOptional()
  user_id?: string

  @ApiProperty({ required: false })
  @IsUUID()
  @IsOptional()
  shopping_list_id?: string

  @ApiProperty({ required: false })
  @IsOptional()
  updated_at?: Date
}
