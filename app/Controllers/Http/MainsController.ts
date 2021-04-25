import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class MainsController {
  public async index ({ response }: HttpContextContract) {
    return response.json({ message: 'hello, world!' })
  }
}
