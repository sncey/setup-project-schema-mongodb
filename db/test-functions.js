const ObjectId = require("mongodb").ObjectId;

const Author = require("../models/author");
const BlogPost = require("../models/blog-post");

const {getDb} = require("./connection");

module.exports = {
  isValidObjectId: function isValidObjectId(id) {
    return ObjectId.isValid(id);
  },
  addAuthor: async function addAuthor(params) {
    const { name, age, gender, nationality, areasOfExpertise } = params;

    const author = new Author(name, age, gender, nationality, areasOfExpertise);

    try {
      const newAuthor = await author.save();
      return newAuthor;
    } catch (err) {
      return { message: err };
    }
  },
  getAuthor: async function getAuthor(id) {
    const db = getDb();
    const author = await db
      .collection("authors")
      .findOne({ _id: new ObjectId(id) });
    return author;
  },
  addBlogPost: async function addBlogPost(params) {
    const { title, content, tags, authorRef } = params;

    const blogPost = new BlogPost(title, content, tags, authorRef);

    try {
      const newBlogPost = await blogPost.save();
      return newBlogPost;
    } catch (err) {
      return { message: err };
    }
  },
  getBlogPost: async function getBlogPost(id) {
    const db = getDb();
    const blogPost = await db
      .collection("blogPosts")
      .findOne({ _id: new ObjectId(id) });
    return blogPost;
  },
};
