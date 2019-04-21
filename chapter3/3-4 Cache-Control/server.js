const http = require("http");
const fs = require("fs");

http
  .createServer(function(request, response) {
    console.log("request come", request.url);
    if (request.url === "/") {
      const html = fs.readFileSync("test.html", "utf-8");
      response.writeHead(200, {
        "Content-Type": "text/html"
      });
      response.end(html);
    }
    if (request.url === "/script.js") {
      response.writeHead(200, {
        "Content-Type": "text/javascript",
        "Cache-Control": "max-age=200, public" // 从客户端缓存里面读数据
      });
      response.end('console.log("script loaded 2")');
    }
  })
  .listen(8888);

console.log("server listen 8888");
