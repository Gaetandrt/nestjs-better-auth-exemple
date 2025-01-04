import { ApiProperty } from '@nestjs/swagger'
import { IsBoolean, IsNumber } from 'class-validator'

export class PaginationMetadataDTO {
  @ApiProperty({ required: true })
  @IsNumber()
  readonly count: number

  @ApiProperty({ required: true })
  @IsNumber()
  readonly page: number

  @ApiProperty({ required: true })
  @IsNumber()
  readonly limit: number

  @ApiProperty({ required: true })
  @IsNumber()
  readonly totalPages: number

  @ApiProperty({ required: true })
  @IsBoolean()
  readonly nextPage: boolean

  @ApiProperty({ required: true })
  @IsBoolean()
  readonly previousPage: boolean

  constructor(
    count: number,
    page: number,
    limit: number,
    totalPages: number,
    nextPage: boolean,
    previousPage: boolean
  ) {
    this.count = count
    this.page = page
    this.limit = limit
    this.totalPages = totalPages
    this.nextPage = nextPage
    this.previousPage = previousPage
  }
}
