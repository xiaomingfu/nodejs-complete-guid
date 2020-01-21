const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const feedRoutes = require("./routes/feed");

const app = express();

// app.use(bodyParser.urlencoded()); //x-www-form-urlencoded

app.use(bodyParser.json()); //application/json

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, PATCH, DELETE"
  );
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});

app.use("/feed", feedRoutes);

mongoose
  .connect(
    "mongodb+srv://xiaoming:111@cluster0-fvtw9.mongodb.net/messages?retryWrites=true"
  )
  .then(result => {
    app.listen(8080, () => {
      console.log("start!");
    });
  })
  .catch(err => {
    console.log(err);
  });
