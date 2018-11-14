const http = require('http')

http
  .createServer(function (request, response) {
    console.log('request come', request.url)

    response.writeHead(200, {
      // 浏览器允许跨域
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': 'X-Test-Cors',
      'Access-Control-Allow-Methods': 'POST, PUT, Delete',
      // 可以用上面方式请求最长时间 1000s
      'Access-Control-Max-Age': '1000'
    })
    response.end('123')
  })
  .listen(8887)

console.log('server listen 8887')