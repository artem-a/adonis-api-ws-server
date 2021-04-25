import Route from '@ioc:Adonis/Core/Route'

Route.group(() => {
  Route.get('', 'MainsController.index')
}).prefix('api')

Route.get('', async ({ response }) => {
  return response.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
    </head>
    <body>

    <script src="https://cdnjs.cloudflare.com/ajax/libs/socket.io/4.0.1/socket.io.js"></script>

      <script>
        const socket = io('0.0.0.0:8888', {
          transports: ['websocket'],
          auth: { token: 'some_secrect_token' }
        })

        socket.on('connect', () => {
          console.log('socket is connected')
          socket.emit('message', { message: 'hello, world!' })
        })

        socket.on('messages', (data) => {
          console.log(data)
        });
      </script>

    </body>
    </html>
  `)
})
