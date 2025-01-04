import { ApiProperty } from '@nestjs/swagger'
import { IsOptional, IsString } from 'class-validator'

export class UpdateShoppingListDto {
  @ApiProperty({ required: false })
  @IsString()
  @IsOptional()
  title?: string

  @ApiProperty({ required: false })
  @IsString()
  @IsOptional()
  color?: string

  @ApiProperty({ required: false })
  @IsString()
  @IsOptional()
  emoji?: string | null

  @ApiProperty({ required: false })
  @IsString()
  @IsOptional()
  description?: string | null

  @ApiProperty({ required: false })
  @IsString()
  @IsOptional()
  updated_at?: Date
}
