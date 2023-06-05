const http = require("http");
const fs = require("fs");
const path = require("path");

const server = http.createServer((req, res) => {
  //   // req -  so'rov
  //   // req - javobi
  //   console.log(request.url);

  //   //   res.write("<h1>Hello World</h1>");
  //   res.end("<h1>Hello World</h1>");

  if (req.method === "GET") {
    res.writeHead(200, { "Content-type": "text/html" });

    if (req.url === "/") {
      fs.readFile(
        path.join(__dirname, "templates", "index.html"),
        "utf-8",
        (err, content) => {
          if (err) throw err;
          res.end(content);
        }
      );
    } else if (req.url === "/about") {
      fs.readFile(
        path.join(__dirname, "templates", "about.html"),
        "utf-8",
        (err, content) => {
          if (err) throw err;
          res.end(content);
        }
      );
    } else if (req.url === "/contact") {
      fs.readFile(
        path.join(__dirname, "templates", "contact.html"),
        "utf-8",
        (err, content) => {
          if (err) throw err;
          res.end(content);
        }
      );
    } else if (req.url === "/api/admin") {
      res.writeHead(200, { "Content-Type:": "text/json" });
      const admin = {
        name: "Zarrukh",
        surname: "Jurakulov",
        job: "Full-Stack developer",
      };

      res.end(JSON.stringify(admin));
    }
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
