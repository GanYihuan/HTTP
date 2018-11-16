const http = require('http')

http
  .createServer(function (request, response) {
    console.log('request come', request.url)

    if (request.url === '/') {
      // 302 临时跳转
      // 301 跳转(不可控), 永久
      response.writeHead(302, {
        'Location': '/new'
      })
      response.end('')
    }
    if (request.url === '/new') {
      response.writeHead(200, {
        'Content-Type': 'text/html'
      })
      response.end('<div>this is content</div>')
    }
  })
  .listen(8888)

console.log('server listen 8888')