const http = require('http')
const fs = require('fs')

http
  .createServer(function(request, response) {
    console.log('request come', request.url)

    if (request.url === '/') {
      const html = fs.readFileSync('test.html', 'utf-8')
      response.writeHead(200, {
        'Content-Type': 'text/html'
      })
      response.end(html)
    }

    if (request.url === '/script.js') {
      // 读取 Etag
      const etag = request.headers['if-none-match']
      if (etag === '777') {
        // 304: 资源没修改能直接读缓存
        response.writeHead(304, {
          'Content-Type': 'text/javascript',
          'Cache-Control': 'max-age=200000, no-cache',
          // 上次修改时间, 验证资源是否需要更新
          'Last-Modified': '123',
          // 数据签名, 是否使用缓存
          Etag: '777'
        })
        response.end('123')
      } else {
        response.writeHead(200, {
          'Content-Type': 'text/javascript',
          'Cache-Control': 'max-age=200000, no-cache',
          'Last-Modified': '123',
          Etag: '777'
        })
        response.end('console.log("script loaded 2")')
      }
    }
  })
  .listen(8888)

console.log('server listen 8888')
