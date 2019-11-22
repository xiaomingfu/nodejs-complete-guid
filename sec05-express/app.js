const express = require("express");

const app = express();

app.use((req, res, next) => {
  console.log("this is a middleware");
  next(); //Alows the request to continue to the next middleware in line
});

app.use((req, res, next) => {
  console.log("this is another middleware");
  res.send("<h1>Hello from Express!</h1>");
});

// const server = http.createServer(app);

// server.listen(3000);

app.listen(3000);
