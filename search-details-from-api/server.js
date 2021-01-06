const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const port = 3000;
//app.use(cors());
let terminal = [
  { clients: ["Client1", "Client3", "Client2", "Client4"] },
  {
    Assests: [
      {
        assetName: "property1",
        assetLocation: "loc1",
        assetPrice: 450,
      },
      {
        assetName: "property2",
        assetLocation: "loc2",
        assetPrice: 400,
      },
    ],
  },
  { Orders: ["order1", "order2", "order3", "order4"] },
  { Merchants: ["offlineMerchant", "onlineMerchant"] },
];

// parse requests of content-type: application/json
app.use(bodyParser.json());

// parse requests of content-type: application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// simple route
app.get("/api", (req, res) => {
  res.json({ message: " Well! I am up." });
});
app.get("/terminal", cors(), (req, res) => {
  res.json(terminal);
  res.status(404).send("Nothing found");
});

// set port, listen for requests
app.listen(port, () => {
  console.log(`Server is running on port ${port}.`);
});
