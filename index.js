const http = require("http");

const server = http.createServer((request, response) => {
  // request -  so'rov
  // response - javobi
  console.log(request.url);

  response.write("<h1>Hello World 14</h1>");
  response.end();
});

server.listen(3001, () => {
  console.log("Server has been started on port: 3001");
});
