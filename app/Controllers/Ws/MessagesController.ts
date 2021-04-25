import { Socket } from 'socket.io';
import {
  ConnectedSocket,
  MessageBody,
  OnMessage,
  SocketController
} from 'socket-controllers'

@SocketController()
export default class MessagesController {
  @OnMessage('message')
  message (@ConnectedSocket() socket: Socket, @MessageBody() data: any)  {
    console.log('received message:', data)
    console.log(socket.id)

    socket.emit('messages', data)
  }
}
