const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

//enviroment variables
const DBURL =
  "mongodb+srv://allisonbrown:7xFULrGkhiFTHWlk@cluster0.ch8mu.mongodb.net/";
const PORT = 3030;

mongoose
  .connect(DBURL)
  .then(console.log("connection with database successful"))
  .catch((e) => {
    console.log("error in connecting with database");
    console.log(e);
  });

const allowedOrigins = ["http://localhost:5173"];

app.use(
  cors({
    origin: allowedOrigins,
    methods: ["GET", "POST", "PATCH", "DELETE"],
    allowedHeaders: ["Content-Type"],
  })
);

//serves all files in public directory
app.use(express.static("public"));

//parsing form data
app.use(bodyParser.json());

//get all fabric

//show one fabric
