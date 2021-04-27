import { IocContract } from '@adonisjs/fold'

export default class WsProvider {
  constructor (protected container: IocContract) {}

  public register () {
    this.container.singleton('Adonis/Addons/Ws', () => {
      const { WS } = require('.')

      return new WS()
    })
  }

  public async ready () {
    const App = await this.container.use('Adonis/Core/Application')

    if (App.environment === 'web') {
      const WS = await this.container.use('Adonis/Addons/Ws')

      await WS.init()
    }
  }

  public async shutdown () {
    await this.container.use('Adonis/Addons/Ws').close()
  }
}
