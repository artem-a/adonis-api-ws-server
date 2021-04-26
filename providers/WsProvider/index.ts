import  HttpServer from '@ioc:Adonis/Core/Server'
import { Server as IoServer } from 'socket.io'
import { useSocketServer } from 'socket-controllers'

import { WsContarct } from '@ioc:Adonis/Addons/Ws'

// WS controllers
import MessagesController from 'App/Controllers/Ws/MessagesController'

// WS middlewares
import Auth from 'App/Middleware/Ws/Auth'

export class WS implements WsContarct {
  private io: IoServer

  public async init (): Promise<void> {
    this.io = new IoServer(HttpServer.instance)

    useSocketServer(this.io, {
      controllers: [MessagesController],
      middlewares: [Auth],
    })
  }

  public emit<T> (event: string, data: T): void {
    this.io.emit(event, data)
  }

  public close () {
    this.io?.close()
  }
}
