require("dotenv").config();
const express = require("express");
const currenciesController = require("./currencies/currencies.controller");
const usersController = require("./users/users.controller");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
require("./authentication/local.strategy");
require("./authentication/jwt.strategy");
const passport = require("passport");
const cors = require("cors");
const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(cors());

app.use("/users", usersController);
app.use(passport.authenticate("jwt", { session: false }),
  currenciesController
);


async function main() {
  await mongoose.connect("mongodb://projectDB:27017/projectdb");
  //await mongoose.connect(process.env.MONGO_URI);
  console.log("Connected to Mongo Database");
  app.listen(port, '0.0.0.0', () => {
    console.log(
      `API listening on port ${port}, visit http://localhost:${port}/`
    );
  });
}

main();
