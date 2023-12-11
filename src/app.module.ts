import { Module } from '@nestjs/common'
import { Transport, ClientsModule } from '@nestjs/microservices'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { UsersModule } from './modules/users/users.module'

@Module({
  imports: [
    UsersModule,
    ClientsModule.register([
      {
        name: 'TODO_SERVICE',
        transport: Transport.TCP,
        options: {
          host: 'localhost',
          port: 3001,
        },
      },
    ]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
