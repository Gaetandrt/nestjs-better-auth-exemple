import {
  ExecutionContext,
  Injectable,
  Logger,
  NestInterceptor
} from '@nestjs/common'
import { toNodeHandler } from 'better-auth/node'
import { Observable, of } from 'rxjs'
import { AuthService } from './auth.service'

@Injectable()
export class BetterAuthInterceptor implements NestInterceptor {
  constructor(public readonly service: AuthService) {}
  private readonly logger = new Logger(BetterAuthInterceptor.name)

  async intercept(context: ExecutionContext): Promise<Observable<any>> {
    this.logger.log('Before request...')
    const req = context.switchToHttp().getRequest()
    const res = context.switchToHttp().getResponse()

    const authHandler = toNodeHandler(this.service.betterAuth)

    authHandler(req as any, res as any)

    return of()
  }
}
