const mongodb = require("mongodb");
const getDb = require("../db/connection").getDb;

// Add your code below


class Author {
  constructor( name, age, gender, nationality, areasOfExpertise )
  {
    this.name = name;
    this.age = age ;
    this.gender = gender ;
    this.nationality = nationality ;
    this.areasOfExpertise = areasOfExpertise ;
  }

    save() {
        const db = getDb();
        return db.collection("authors").insertOne(this);
    }

    }

module.exports = Author;