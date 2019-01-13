const http = require("http");

http
  .createServer(function(request, response) {
    console.log("request come", request.url);
    response.writeHead(200, {
      // 浏览器允许跨域
      "Access-Control-Allow-Origin": "*",
      // 跨域 浏览器允许的请求头
      // request-method: options  允许下次发送的请求
      "Access-Control-Allow-Headers": "X-Test-Cors",
      // 跨域 浏览器允许的请求方法
      "Access-Control-Allow-Methods": "POST, PUT, Delete",
      // 可以用上面方式请求最长时间 1000 s
      "Access-Control-Max-Age": "1000"
    });
    response.end("123");
  })
  .listen(8887);

console.log("server listen 8887");
