const http = require("http");

http
  .createServer(function(request, response) {
    console.log("request come", request.url);
    response.writeHead(200, {
      "Access-Control-Allow-Origin": "*" // 浏览器允许跨域， * 任何域名都允许
    });
    response.end("123");
  })
  .listen(8887);

console.log("server listen 8887");
