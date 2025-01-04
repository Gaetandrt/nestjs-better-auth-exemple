import { Injectable } from "@nestjs/common";

import { ResponseDTO } from "@dto/response.dto";
import { PrismaService } from "src/prisma.service";
import { HttpStatus } from "../../types/api";

@Injectable()
export class UsersService {
  constructor(private readonly prisma: PrismaService) {}

  async findAll() {
    const users = await this.prisma.user.findMany();

    return new ResponseDTO(HttpStatus.OK, "Users retreived", users);
  }
}
