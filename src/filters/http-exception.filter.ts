import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpException,
} from "@nestjs/common";
import { Response } from "express";

import { ApiResponse, ExceptionResponseObject } from "../types/api";

@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const status = exception.getStatus();
    const exceptionResponse = exception.getResponse();

    response.status(status).json({
      status,
      message:
        typeof exceptionResponse === "object"
          ? (exceptionResponse as ExceptionResponseObject)?.message
          : exceptionResponse,
    } as ApiResponse<undefined>);
  }
}
