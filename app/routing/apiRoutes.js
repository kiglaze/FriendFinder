// Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

var Friends = require("./../data/friends");
var FriendsList = new Friends();

// Sets up the Express App
// =============================================================
var app = express();

// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

app.get("/friends", function(req, res) {
  res.json(FriendsList.getAllFriends());
});

app.post("/friends", function(req, res) {
	var addedPersonObj = req.body;
	var closestMatchPersonObj = FriendsList.findClosestMatch(addedPersonObj.scores);
	FriendsList.addFriend(
		addedPersonObj.name, 
		addedPersonObj.photo,
		addedPersonObj.scores
		);
	res.json(closestMatchPersonObj);
});

module.exports = app;
