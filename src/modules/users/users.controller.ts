import { Controller, Body, Post, Injectable } from '@nestjs/common'
import { UsersService } from './users.service'
import { CreateUserDto } from './dtos/create-user.dto'

@Injectable()
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post('create')
  async create(@Body() createUserDto: CreateUserDto): Promise<any> {
    const user = await this.usersService.create(createUserDto)
    return user
  }
}
