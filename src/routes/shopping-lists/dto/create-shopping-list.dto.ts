import { ApiProperty } from '@nestjs/swagger'
import { IsNotEmpty, IsOptional, IsString } from 'class-validator'

export class CreateShoppingListDto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  title: string

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  user_id: string

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  color: string

  @ApiProperty({ required: false })
  @IsString()
  @IsOptional()
  emoji?: string | null

  @ApiProperty({ required: false })
  @IsString()
  @IsOptional()
  description?: string | null
}
