import {
  All,
  Controller,
  InternalServerErrorException,
  Logger,
  Req,
  Res,
} from "@nestjs/common";
import { ApiOperation, ApiTags } from "@nestjs/swagger";
import { Request, Response } from "express";

import { toNodeHandler } from "better-auth/node";
import { AuthService } from "./auth.service";

@Controller("api/auth")
@ApiTags("api/auth")
export class AuthController {
  constructor(private readonly authService: AuthService) {}
  private readonly logger = new Logger(AuthController.name);

  @All("*")
  @ApiOperation({ summary: "Handle all authentication routes" })
  async handleAuth(@Req() req: Request, @Res() res: Response) {
    if (!this.authService.betterAuth) {
      this.logger.error("BetterAuth not initialized");
      throw new InternalServerErrorException(
        "Authentication service not initialized"
      );
    }

    try {
      const authHandler = toNodeHandler(this.authService.betterAuth);
      const result = await authHandler(req, res);

      this.logger.debug(
        `Auth handler completed with result: ${JSON.stringify(result)}`
      );
      return result;
    } catch (error) {
      this.logger.error(`Auth handler failed: ${error.message}`, error.stack);
      throw error;
    }
  }
}
