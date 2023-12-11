import { Injectable } from '@nestjs/common'
import { ClientProxy } from '@nestjs/microservices'
import { Inject } from '@nestjs/common/decorators/core/inject.decorator'
import { CreateUserDto } from './dtos/create-user.dto'
import { firstValueFrom } from 'rxjs'

@Injectable()
export class UsersService {
  constructor(@Inject('USER_SERVICE') private readonly client: ClientProxy) {}

  async create(createdUser: CreateUserDto) {
    const user = await firstValueFrom(
      this.client.send({ cmd: 'create-user' }, createdUser),
    )
    return user
  }
}
