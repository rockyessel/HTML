// Calling all the required packages
const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const multer = require("multer");
const File = require('./model/fileSchema')

const app = express();

// Configurations for "body-parser"
app.use(
    bodyParser.urlencoded({
        extended: true,
    })
);



// Configurations for setting up ejs engine &
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(`${__dirname}/public`));

// displaying static files from "public" folder
  app.use("/", (req, res) => {res.status(200).render("index")});

//Configuration for Multer
const upload = multer({ dest: "public/files" });

//API Endpoint for uploading file
app.post("/api/uploadFile", upload.single("myFile"), (req, res) => {
    // Stuff to be added later
    console.log(req.file);
});

// Routes will be added here later on

//Express server
module.exports = app