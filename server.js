// Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

var Friends = require("./app/data/friends");
var FriendsList = new Friends();

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

app.use('/', require('./app/routing/htmlRoutes'));

app.get("/api/friends", function(req, res) {
  res.json(FriendsList.getAllFriends());
});

app.get("/add/test/friends", function(req, res) {
		FriendsList.addFriend(
		"Hannah Montana", 
		"https://cdn1.edgedatg.com/aws/v2/dch/HannahMontana/slide/552583/97ff950c845a40ad1b465f97dfc377b1/1000x405-Q100_97ff950c845a40ad1b465f97dfc377b1.jpg",
		[
	      5,
	      1,
	      4,
	      4,
	      5,
	      1,
	      2,
	      5,
	      4,
	      1
		]
		);
		FriendsList.addFriend(
		"Ginny Weasley", 
		"http://akns-images.eonline.com/eol_images/Entire_Site/2017210/rs_722x1024-170310112200-634.Bonnie-Wright-Rupert-Grint.ms.031017.jpg",
		[
	      4,
	      3,
	      2,
	      2,
	      1,
	      5,
	      2,
	      1,
	      4,
	      5
		]
		);
		FriendsList.addFriend(
		"Emma Watson", 
		"https://assets.vogue.com/photos/58aa4e25e2fa2b55f494c592/master/pass/square-holding-emma-watson-custom-oscar-de-la-renta.jpg",
		[
	      3,
	      3,
	      3,
	      3,
	      3,
	      3,
	      3,
	      3,
	      3,
	      3
		]
		);
  res.json(FriendsList.getAllFriends());
});

app.post("/api/friends", function(req, res) {
	var addedPersonObj = req.body;
	var closestMatchPersonObj = FriendsList.findClosestMatch(addedPersonObj.scores);
	FriendsList.addFriend(
		addedPersonObj.name, 
		addedPersonObj.photo,
		addedPersonObj.scores
		);
	res.json(closestMatchPersonObj);
});

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});

