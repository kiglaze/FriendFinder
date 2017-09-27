// Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();

// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "../public/home.html"));
});

app.get("/survey", function(req, res) {
  res.sendFile(path.join(__dirname, "../public/survey.html"));
});

app.get("/assets/css/surveyStyle.css", function(req, res) {
  res.sendFile(path.join(__dirname, "../../assets/css/surveyStyle.css"));
});

app.get("/assets/css/style.css", function(req, res) {
  res.sendFile(path.join(__dirname, "../../assets/css/style.css"));
});

module.exports = app;
