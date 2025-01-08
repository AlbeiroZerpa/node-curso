const express = require('express')
const { phone } = require("phone");

const PORT = 5000;

const app = express();

app.get("/", (req, res)=>{
  res.writeHead(200, { "Content-Type": "text/html" });
  res.write("<html>Hola Inicio</html>");
  res.end();
})

app.listen(PORT, ()=>{
  console.log('running on '+ PORT);
});


const server = http.createServer((req, res) => {
  const urlData = url.parse(req.url, true);
  const path = urlData.pathname;
  const query = urlData.query;
  console.log(path);
  console.log(query);

  switch (path) {
    case "/":
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write("<html>Hola Inicio</html>");
      break;
    case "/info":
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write("<html>Hola INFO</html>");
      break;
    case "/phone":
      try {
        const result = phone("+" + query.value);
        res.writeHead(200, { "Content-Type": "text/html" });
        res.write(JSON.stringify(result));
      } catch (e) {
        res.writeHead(400, { "Content-Type": "text/html" });
        res.write("Bad Response");
      }
      break;
    default:
      res.writeHead(404, { "Content-Type": "text/html" });
      res.write("<html>ERROR 404</html>");
  }
  res.end();
});
