require('babel/register')
var app = require('./app')

var http = require('http')
var port = process.env.PORT || 3000
var server = http.createServer(app)
server.listen(port, function() {
  console.log('listening on', port)
})
