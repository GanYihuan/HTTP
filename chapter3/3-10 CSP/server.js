const http = require('http')
const fs = require('fs')

http
  .createServer(function(request, response) {
    console.log('request come', request.url)

    if (request.url === '/') {
      const html = fs.readFileSync('test.html', 'utf-8')
      response.writeHead(200, {
        'Content-Type': 'text/html',
        // <meta> 标签来写
        // script-src: 限制 script 插入, 防 XSS
        // 允许 http, https 加载,
        // \'self\' 只允许本域名 js 加载
        // 写域名: 允许该域名加载
        // form-action \'self\' 限制 form 表单提交
        // report-uri /report  汇报情况
        'Content-Security-Policy': "default-src http: https: 'self'; form-action 'self'; report-uri /report"
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
