import { ApiProperty } from '@nestjs/swagger'
import { IsNotEmpty, IsOptional, IsString, IsUUID } from 'class-validator'

export class CreatePurchaseHistoryDto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  user_id: string

  @ApiProperty({ required: false })
  @IsUUID()
  @IsOptional()
  shopping_list_id?: string
}
