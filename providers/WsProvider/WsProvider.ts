import { IocContract } from '@adonisjs/fold'

export default class WsProvider {
  constructor (protected container: IocContract) {}

  public register () {
    this.container.singleton('App/Addons/WS', async () => {
      const WS = new (await import('.')).default()

      return WS
    })
  }

  public async ready () {
    const App = (await import('@ioc:Adonis/Core/Application')).default

    if (App.environment === 'web') {
      const WS = await this.container.use('App/Addons/WS')

      await WS.init()
    }
  }
}
