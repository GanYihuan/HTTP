const http = require('http')
const fs = require('fs')

http
  .createServer(function (request, response) {
    console.log('request come', request.url)

    if (request.url === '/') {
      // 301: 永久跳转, 会从缓存里面读
      // 302: 临时跳转
      response.writeHead(302, {
        'Location': '/new'
      })
      response.end('')
    }

    if (request.url === '/new') {
      response.writeHead(302, {
        'Content-Type': 'text/html'
      })
      response.end('<div>this is content</div>')
    }
  })
  .listen(8888)

console.log('server listen 8888')