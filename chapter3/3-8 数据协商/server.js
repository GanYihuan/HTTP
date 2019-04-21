const http = require("http");
const fs = require("fs");
const zlib = require("zlib");

http
  .createServer(function(request, response) {
    console.log("request come", request.url);

    const html = fs.readFileSync("test.html");
    response.writeHead(200, {
      "Content-Type": "text/html",
      "X-Content-Type-Options": "nosniff", // 不要浏览器猜测返回内容
      "Content-Encoding": "gzip" // 压缩
    });
    response.end(zlib.gzipSync(html));
  })
  .listen(8888);

console.log("server listen 8888");
