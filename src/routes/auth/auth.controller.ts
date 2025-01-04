import { All, Controller, Logger, Req, Res } from '@nestjs/common'
import { ApiTags } from '@nestjs/swagger'

import { toNodeHandler } from 'better-auth/node'
import { AuthService } from './auth.service'

@Controller('api/auth')
@ApiTags('api/auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}
  private readonly logger = new Logger(AuthController.name)

  @All('*')
  async handleAuth(@Req() req: Request, @Res() res: Response) {
    this.logger.log('handleAuth')
    if (!this.authService.betterAuth) {
      throw new Error('BetterAuth not initialized')
    }

    console.log(req.url)
    this.logger.log('req', req.body)
    const authHandler = toNodeHandler(this.authService.betterAuth)

    const result = await authHandler(req as any, res as any)
    console.log('result', result)

    return result
  }
}
