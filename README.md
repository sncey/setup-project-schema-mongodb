# Setup project schema using MongoDB

## Objectives
- Practice setting up MongoDB collection schemas and models using JS classes
- Understanding database implementation without ODM

## Overview
In the previous module, we've got introduced to the main types of databases, SQL and NoSQL, and have seen how MySQL uses tables to store data and MongoDB uses collections. Since MongoDB gives you a lot of flexibility, there are no rules or rather flexible rules, but it's still very important to design a well-strucured schema for effeciency, consistency and maintainability.

In thi assignment, we will build the schema for a blog website which has blog posts and authors.

## Starter Code
In this assignment, we will not be using an ODM, instead we will use the MongoDB driver for Node.js. You will find the following starter code in the project folder:
- Basic Express application setup in `index.js`
- Database connection setup in `db/connection.js`
- Some test functions in `db/test-functions.js`

All the necessary packages are already listed in `package.json`. So you know the drill. `npm install` and `npm start` to get started.

**Note**: Make sure MongoDB is running on your local machine.

## Instructions
Add the code in the `models` folder to create models for BlogPost and Author. Your code must include:
- the base structure of each document in the form of a JavaScript class with a constructor to initialise instances of the model
- class method in order to `save` a new instance of the model on the database

### Part 0: Building the blog post schema
Our first collection is the collection for blog posts. In `models/blog-post.js`, design the schema and model for a document representing a blog post. It should include:
- Title as a string
- Content as a string
- Array of tags where each tag is a string
- Reference to author document in the authors collection, this will be an ObjectId

### Part 1: Building the author schema
Our second collection is the collection for authors. In `models/author.js`, design the schema and model for an author document. It should include:
- Name as string
- Age as number
- Gender as string
- Nationality as string
- Array for areas of expertise where each is a string

**Hint**: Look at the test files in order to visualize how the schema and model should look like. And ofcourse Google and documentation!

## Submission
Run `npm test` to test your code. If it shows all tests have passed then you're good to go.

You can also manually test your models by creating a few API endpoints on the `index.js` file for adding and finding authors and blogposts. Then call these endpoints to test your models. You can also verify the database operations by checking the collections using any MongoDB GUI tool or Mongo shell.

Once you're ready to submit the assignment, follow these steps on your terminal:
1. Stage your changes to be committed: `git add .`
2. Commit your final changes: `git commit -m "solve assignment"`
3. Push your commit to the main branch of your assignment repo: `git push origin main`

After your changes are pushed, return to this assignment on Canvas for the final step of submission.