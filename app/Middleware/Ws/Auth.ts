import { Socket } from 'socket.io'
import { Middleware, MiddlewareInterface } from 'socket-controllers'

@Middleware()
export default class Auth implements MiddlewareInterface {
  async use(socket: Socket, next: (err?: Error) => void) {
    const { token } = socket.handshake.auth

    // here we can use a DB check or something else
    const isValid = await Promise.resolve(token === 'some_secrect_token')

    if (isValid) {
      next()
    } else {
      next(new Error('Invalid auth token'))
    }
  }
}
