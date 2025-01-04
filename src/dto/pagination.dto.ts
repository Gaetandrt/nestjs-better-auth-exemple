import { ApiProperty } from '@nestjs/swagger'
import { IsInt, IsOptional } from 'class-validator'

export class PaginationDto {
  @ApiProperty({ required: false, type: 'number', example: 1 })
  @IsOptional()
  @IsInt()
  readonly page: number

  @ApiProperty({ required: false, type: 'number', example: 10 })
  @IsOptional()
  @IsInt()
  readonly limit: number
}
