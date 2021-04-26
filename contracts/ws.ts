declare module '@ioc:Adonis/Addons/Ws' {
  export interface WsContarct {
    init (): Promise<void>

    emit<T> (event: string, data: T): void

    close (): void
  }

  const WS: WsContarct

  export default WS
}
