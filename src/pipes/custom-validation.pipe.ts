import {
  BadRequestException,
  Injectable,
  ValidationPipe,
} from "@nestjs/common";
import { ValidationError } from "class-validator";

import {
  ValidationErrorMessage,
  ValidationErrorMessageObject,
} from "../types/api";

@Injectable()
export class CustomValidationPipe extends ValidationPipe {
  constructor() {
    super({
      exceptionFactory: (errors: ValidationError[]) => {
        const result = errors.map(
          (error: ValidationError): ValidationErrorMessageObject => {
            const messages: ValidationErrorMessage =
              error.constraints ||
              (error.children &&
                error.children.some((child) => child.constraints))
                ? []
                : undefined;

            if (error.constraints) {
              Object.entries(error.constraints).forEach((constraint) => {
                messages?.push(String(constraint[1]));
              });
            }

            if (error.children) {
              error.children.forEach((child) => {
                if (child.constraints) {
                  Object.entries(child.constraints).forEach((constraint) => {
                    messages?.push(String(constraint[1]));
                  });
                }
              });
            }

            return {
              property: error.property,
              messages,
            };
          }
        );

        return new BadRequestException(result);
      },
      transform: true,
      whitelist: true,
      forbidNonWhitelisted: true,
      transformOptions: {
        enableImplicitConversion: true,
      },
    });
  }
}
