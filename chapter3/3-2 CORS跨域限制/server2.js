const http = require('http')

http
  .createServer(function (request, response) {
    console.log('request come', request.url)

    response.writeHead(200, {
      // 浏览器允许跨域， * 任何域名都允许
      'Access-Control-Allow-Origin': '*'
    })
    response.end('123')
  })
  .listen(8887)

console.log('server listen 8887')