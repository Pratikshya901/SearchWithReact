const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const port = 3000;
//to connect to the database
//const connection = require("./src/workFlows/fetchFromDb");

//sample terminal data
let terminal = [
  {
    entityId: 1,
    entityName: "Client",
    description: "desc about client entity",
    isActive: 1,
    ownerEmail: "c1@org.com",
  },
  {
    entityId: 2,
    entityName: "Assets",
    description: "desc about Assets entity",
    isActive: 1,
    ownerEmail: "a1@org.com",
  },
  {
    entityId: 3,
    entityName: "Order",
    description: "desc about Order entity",
    isActive: 0,
    ownerEmail: "o1@org.com",
  },
  {
    entityId: 4,
    entityName: "Merchant",
    description: "desc about Merchant entity",
    isActive: 1,
    ownerEmail: "m1@org.com",
  },
  {
    entityId: 5,
    entityName: "Bank",
    description: "desc about Bank entity",
    isActive: 0,
    ownerEmail: "b1@org.com",
  },
];

// parse requests of content-type: application/json
app.use(bodyParser.json());

// parse requests of content-type: application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// sample home route
app.get("/", (req, res) => {
  res.json({ message: " Well! I am up." });
});

/****
 *
 * route to fetch all data from  db
 * Uncomment below code for  integration with db
 *
 * */

/*app.get("/terminal", cors(), (req, res) => {
  try {
    connection.query("Select * from entity_list", function (
      error,
      results,
      fields
    ) {
      if (error) throw error;
      res.end(JSON.stringify(results)); //sends Json data to client through JSON.stringify()
    });

    res.status(404).send("Nothing found");
  } catch (e) {
    console.log(e);
  }
});*/

// sample terminal route
app.get("/terminal", cors(), (req, res) => {
  res.json(terminal);
});

// set port, listen for requests
app.listen(port, () => {
  console.log(`Server is running on port ${port}.`);
});
