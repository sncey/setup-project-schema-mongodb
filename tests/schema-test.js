const expect = require("chai").expect;

const testFunctions = require("../db/test-functions");
const {mongoConnect} = require("../db/connection");

describe("authors and blogposts", () => {
  before((done) => {
    mongoConnect(done);
  });

  let authorId, blogPostId;
  const authorData = {
    name: "Ali",
    age: 22,
    gender: "Male",
    nationality: "Iraqi",
    areasOfExpertise: ["coding", "design", "databases"]
  };
  const blogPostData = {
    title: "A new post",
    content: "Lorem ipsum lorem ipsum",
    tags: ["blog", "lifestyle"]
  };

  step("author model should save author to database", async () => {
    const newAuthor = await testFunctions.addAuthor(authorData);
    console.log(newAuthor);
    expect(newAuthor).to.be.an("object");
    expect(newAuthor.acknowledged).to.equal(true);
    expect(testFunctions.isValidObjectId(newAuthor.insertedId)).to.be.equal(true);
    authorId = newAuthor.insertedId;
  });

  step("author model should have correct schema", async () => {
    const author = await testFunctions.getAuthor(authorId);
    expect(author).to.be.an("object");
    expect(author).to.deep.equal({
      ...authorData,
      _id: authorId
    });
  });

  step("blogpost model should save blogpost to database", async () => {
    const newBlogPost = await testFunctions.addBlogPost({
      ...blogPostData,
      authorRef: authorId
    });
    expect(newBlogPost).to.be.an("object");
    expect(newBlogPost.acknowledged).to.equal(true);
    expect(testFunctions.isValidObjectId(newBlogPost.insertedId)).to.be.equal(true);
    blogPostId = newBlogPost.insertedId;
  });

  step("blogpost model should have correct schema", async () => {
    const blogPost = await testFunctions.getBlogPost(blogPostId);
    expect(blogPost).to.be.an("object");
    expect(blogPost).to.deep.equal({
      ...blogPostData,
      authorRef: authorId,
      _id: blogPostId
    });
  });
});
