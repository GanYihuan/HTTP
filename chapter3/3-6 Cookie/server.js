const http = require('http')
const fs = require('fs')

http
  .createServer(function(request, response) {
    console.log('request come', request.url)

    if (request.url === '/') {
      const html = fs.readFileSync('test.html', 'utf-8')
      response.writeHead(200, {
        'Content-Type': 'text/html',
        // HttpOnly 无法通过 document.cookie 访问
        // 当前域写了 cookie 其他域不能访问该 cookie
        // cookie 不能跨域设置 cookie
        'Set-Cookie': ['id=123; max-age=2', 'abc=456; HttpOnly']
      })
      response.end(html)
    }
  })
  .listen(8888)

console.log('server listen 8888')
