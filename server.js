import http from 'http'
import app from './app'

let port = process.env.PORT || 3000
let server = http.createServer(app)

server.listen(port, function() {
  console.log('listening on', port)
})
