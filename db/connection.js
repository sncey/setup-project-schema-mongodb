const mongodb = require("mongodb");
const MongoClient = mongodb.MongoClient;
const url = "mongodb://127.0.0.1:27017/blogs-db";

let _db;

const mongoConnect = async (callback) => {
  try {
    const client = await MongoClient.connect(url);
    _db = client.db();
    console.log("Connected to MongoDB");
    return callback();
  } catch (error) {
    console.log(error);
    throw error;
  }
};

const getDb = () => {
  if (_db) {
    return _db;
  }
  throw "No database found!";
};

exports.mongoConnect = mongoConnect;
exports.getDb = getDb;
