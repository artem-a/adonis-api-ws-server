import WS from '@ioc:Adonis/Addons/Ws'
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class MainsController {
  public async index ({ response }: HttpContextContract) {
    WS.emit('messages', { message: 'sent from controller' })

    return response.json({ message: 'hello, world!' })
  }
}
