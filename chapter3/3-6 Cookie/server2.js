const http = require("http");
const fs = require("fs");

http
  .createServer(function(request, response) {
    console.log("request come", request.url);

    const host = request.headers.host;

    if (request.url === "/") {
      const html = fs.readFileSync("test.html", "utf-8");
      if (host === "text.com") {
        response.writeHead(200, {
          "Content-Type": "text/html",
          // HttpOnly 禁止 js 访问 cookie
          // cookie 不能跨域设置 cookie
          // domain 使二级域名能共享 cookie
          "Set-Cookie": ["id=123; max-age=2", "abc=456; domain=test.com"]
        });
        response.end(html);
      }
    }
  })
  .listen(8888);

console.log("server listen 8888");
