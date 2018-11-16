const http = require('http')
const fs = require('fs')

http
  .createServer(function (request, response) {
    console.log('request come', request.url)

    if (request.url === '/') {
      const html = fs.readFileSync('test.html', 'utf-8')
      response.writeHead(200, {
        'Content-Type': 'text/html',
        // [内容安全策略]()
        // 限制 script 插入, 允许 http, https, \'self\' 只允许本站提供的外链脚本
        'Content-Security-Policy': 'default-src http: https: \'self\'; form-action \'self\'; report-uri /report'
      })
      response.end(html)
    } else {
      response.writeHead(200, {
        'Content-Type': 'application/javascript'
      })
      response.end('console.log("load script")')
    }
  })
  .listen(8888)

console.log('server listen 8888')