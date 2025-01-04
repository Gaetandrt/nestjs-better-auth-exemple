import { expo } from '@better-auth/expo'
import { Injectable } from '@nestjs/common'
import { PrismaClient } from '@prisma/client'
import { betterAuth } from 'better-auth'
import { prismaAdapter } from 'better-auth/adapters/prisma'

@Injectable()
export class AuthService {
  public betterAuth: any

  constructor() {
    const prisma = new PrismaClient()

    const auth = betterAuth({
      plugins: [expo()],
      database: prismaAdapter(prisma, {
        provider: 'postgresql'
      }),
      socialProviders: {
        google: {
          clientId: process.env.GOOGLE_CLIENT_ID as string,
          clientSecret: process.env.GOOGLE_CLIENT_SECRET as string
        }
      },
      trustedOrigins: ['myapp://', 'exp://10.10.85.13:8081/--/(app)'],
      advanced: {
        disableCSRFCheck: true
      },
      emailAndPassword: {
        enabled: true
      }
    })

    this.betterAuth = auth
    console.log({ auth })
  }
}
