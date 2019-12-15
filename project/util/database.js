const mongodb = require("mongodb");
const MongoClient = mongodb.MongoClient;

const mongoConnect = callback => {
  MongoClient.connect(
    "mongodb+srv://xiaoming:111@cluster0-fvtw9.mongodb.net/test?retryWrites=true&w=majority"
  )
    .then(client => {
      console.log("Connected!");
      callback(client);
    })
    .catch(err => console.log(err));
};

module.exports = mongoConnect;
