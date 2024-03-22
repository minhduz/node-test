const http = require("http");
const fs = require("fs");
const server = http.createServer((req, res) => {
  if (req.url === "/") {
    fs.readFile("index.html", (err, data) => {
      if (!err) {
        res.write(data);
        res.end();
      }
    });
  } else if (req.url === "/greenwich") {
    fs.readFile("greenwich.html", (err, data) => {
      if (!err) {
        res.write(data);
        res.end();
      }
    });
  } else if (req.url === "/fpt") {
    fs.readFile("fpt.html", (err, data) => {
      if (!err) {
        res.write(data);
        res.end();
      }
    });
  } else {
    res.end("<h1>404 - Not found</h1>");
  }
});
const port = process.env.PORT || 3001;
//process.env.PORT: for cloud deployment
//3001: optimized port for Render
server.listen(port);
