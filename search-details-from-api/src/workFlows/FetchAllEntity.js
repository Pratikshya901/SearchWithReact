const sql = require("./fetchFromDb.js");

const AllEntity = function (entity) {
  this.entityId = entity.entityId;
  this.entityName = entity.entityName;
  this.isActive = entity.isActive;
  this.description = entity.description;
  this.ownerEmail = entity.ownerEmail;
};

AllEntity.getAll = (result) => {
  sql.query("SELECT * FROM entity_list", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("entity_list: ", res);
    result(null, res);
  });
};

// const express = require("express");
// const bodyParser = require("body-parser");
// const cors = require("cors");

// const app = express();
// const port = 3000;

// let books = [
//   {
//     isbn: "9781593275846",
//     title: "Eloquent JavaScript, Second Edition",
//     author: "Marijn Haverbeke",
//     publish_date: "2014-12-14",
//     publisher: "No Starch Press",
//     numOfPages: 472,
//   },
//   {
//     isbn: "9781449331818",
//     title: "Learning JavaScript Design Patterns",
//     author: "Addy Osmani",
//     publish_date: "2012-07-01",
//     publisher: "O'Reilly Media",
//     numOfPages: 254,
//   },
//   {
//     isbn: "9781449365035",
//     title: "Speaking JavaScript",
//     author: "Axel Rauschmayer",
//     publish_date: "2014-02-01",
//     publisher: "O'Reilly Media",
//     numOfPages: 460,
//   },
// ];

// app.use(cors());

// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());

// app.get("/books", (req, res) => {
//   res.json(books);
//   console.log("res", res, req);
//   res.status(404).send("nothing found");
// });

// app.listen(port, () =>
//   console.log(`Hello world app listening on port ${port}!`)
// );
