const http = require("http");
const fs = require("fs");

http
  .createServer(function(request, response) {
    console.log("request come", request.url);
    const html = fs.readFileSync("test.html", "utf-8");
    const img = fs.readFileSync("test.png");

    if (request.url === "/") {
      const html = fs.readFileSync("test.html", "utf-8");
      response.writeHead(200, {
        "Content-Type": "text/html",
        'Connection': 'close' // 关闭长连接
      });
      response.end(html);
    } else {
      response.writeHead(200, {
        "Content-Type": "img/png"
      });
      response.end(img);
    }
  })
  .listen(8888);

console.log("server listen 8888");
