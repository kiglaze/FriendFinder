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

app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "app/public/home.html"));
});

app.get("/survey", function(req, res) {
  res.sendFile(path.join(__dirname, "app/public/survey.html"));
});

app.get("/api/friends", function(req, res) {
  res.json(FriendsList.getAllFriends());
});

app.post("/api/friends", function(req, res) {
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
});

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});

