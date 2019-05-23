const http = require("http");
const fs = require("fs"); // fs模块提供了一个API，用于以一种紧密围绕标准POSIX函数建模的方式与文件系统交互。

http
  .createServer(function(request, response) {
    console.log("request come", request.url);
    const html = fs.readFileSync("test.html", "utf-8");
    response.writeHead(200, {
      "Content-Type": "text/html"
    });
    response.end(html);
  })
  .listen(8888);

console.log("server listen 8888");
