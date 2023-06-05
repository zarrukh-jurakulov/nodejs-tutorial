const http = require("http");

const server = http.createServer((req, res) => {
  //   // req -  so'rov
  //   // req - javobi
  //   console.log(request.url);

  //   //   res.write("<h1>Hello World</h1>");
  //   res.end("<h1>Hello World</h1>");
  if (req.method === "GET") {
    res.writeHead(200, { "Content-type": "text/html" });
    res.end(`
    <h2>Send name</h2>
    <form method="post" action="/">
        <input type="text" name="name" placeholder="Enter your name"/>
        <button type="submit">Send name</button>
    </form>
    `);
  } else if (req.method === "POST") {
    const body = [];
    res.writeHead(200, { "Content-Type:": "text/html; charset=utf-8" });

    req.on("data", (data) => {
      body.push(Buffer.from(data));
    });

    req.on("end", () => {
      const message = body.toString().split("=")[1];
      res.end(`Name successfully added: ${message}`);
    });
  }
});

server.listen(3001, () => {
  console.log("Server has been started on port: 3001");
});
