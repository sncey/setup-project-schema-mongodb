const mongodb = require("mongodb");
const getDb = require("../db/connection").getDb;

// Add your code below

class BlogPost {
    constructor(title, content, tags, authorRef) {
        this.title = title;
        this.content = content;

        this.tags = tags;
        this.authorRef = authorRef;
    }

    save() {
        const db = getDb();
        return db.collection("blogPosts").insertOne(this);
    }

}
module.exports = BlogPost;