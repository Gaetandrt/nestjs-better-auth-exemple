import type { HttpStatus } from '@nestjs/common'
import { ApiProperty } from '@nestjs/swagger'
import {
  IsArray,
  IsNumber,
  IsObject,
  IsOptional,
  IsString
} from 'class-validator'

export class ResponseDTO {
  @ApiProperty({ required: true })
  @IsNumber()
  readonly status: HttpStatus

  @ApiProperty({ required: true })
  @IsString()
  readonly message: string

  @ApiProperty({ required: true })
  @IsOptional()
  @IsArray()
  @IsObject()
  readonly data?: any

  @ApiProperty({ required: true })
  @IsOptional()
  @IsObject()
  readonly metadata?: any

  constructor(status: HttpStatus, message: string, data?: any, metadata?: any) {
    this.status = status
    this.message = message
    this.data = data
    this.metadata = metadata
  }
}
