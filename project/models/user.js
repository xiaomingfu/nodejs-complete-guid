const mongodb = require("mongodb");
const getDb = require("../util/database").getDb;

const ObjectId = mongodb.ObjectId;

class User {
  constructor(username, email, id) {
    this.name = username;
    this.email = email;
    this._id = id ? new mongoDb.ObjectId(id) : null;
  }

  save() {
    const db = getDb();
    let dbOp;
    if (this._id) {
      dbOp = db
        .collection("users")
        .updateOne({ _id: this._id }, { $set: this });
    } else {
      dbOp = db.collection("users").insertOne(this);
    }
    return dbOp
      .then(result => {
        console.log(result);
        return result;
      })
      .catch(err => console.log(err));
  }

  static findById(userId) {
    const db = getDb();
    return db
      .collection("users")
      .findOne({ _id: new ObjectId(userId) })
      .then(user => {
        console.log(user);
        return user;
      })
      .catch(err => console.log(err));
  }
}

module.exports = User;
