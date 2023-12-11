import { Injectable, Inject } from '@nestjs/common'
import { ClientProxy } from '@nestjs/microservices'

@Injectable()
export class AppService {
  constructor(@Inject('TODO_SERVICE') private todoService: ClientProxy) {}

  getTodos() {
    return this.todoService.send('get-todo', {
      status: true,
      message: `MENSAJE DESDE EL GETWAY ${new Date().getSeconds()}`,
    })
  }

  createUser(body: any) {
    return this.todoService.send('create-user', body)
  }
}
