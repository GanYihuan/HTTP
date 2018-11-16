const http = require('http')
const fs = require('fs')
const zlib = require('zlib')

http
  .createServer(function (request, response) {
    console.log('request come', request.url)

    const html = fs.readFileSync('test.html')
    response.writeHead(200, {
      'Content-Type': 'text/html',
      // 不要浏览器猜测返回内容
      'X-Content-Type-Options': 'nosniff',
      // 压缩
      'Content-Encoding': 'gzip'
    })
    response.end(zlib.gzipSync(html))
  })
  .listen(8888)

console.log('server listen 8888')