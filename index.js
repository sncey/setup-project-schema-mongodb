const express = require("express");

const {mongoConnect} = require("./db/connection");

const app = express();
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const port = 3000;
mongoConnect(() => {
  app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
  });
});

// You may write endpoints to test your code here

module.exports = app;