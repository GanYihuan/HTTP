const http = require('http')
const fs = require('fs')

http
  .createServer(function (request, response) {
    console.log('request come', request.url)

    if (request.url === '/') {
      const html = fs.readFileSync('test.html', 'utf-8')
      response.writeHead(200, {
        'Content-Type': 'text/html',
        // ;HttpOnly   禁止 js 访问 cookie
        // domain 访问限制
        'Set-Cookie': ['id=123; max-age=2', 'abc=456; HttpOnly']
      })
      response.end(html)
    }
  })
  .listen(8888)

console.log('server listen 8888')