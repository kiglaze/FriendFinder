var Friends = function() {
	this.friends = [];
};
Friends.prototype.addFriend = function(name, photo, scoresArray) {
	var friend = {
		name: name,
		photo: photo,
		scores: parseIntArrayContents(scoresArray)
	};
	this.friends.push(friend);
};
Friends.prototype.getAllFriends = function() {
	return this.friends;
};

Friends.prototype.findClosestMatch = function(myScoresArr) {
	var closestMatch = null;
	var smallestDifference = null;
	if(this.friends.length > 0) {
		this.friends.forEach(function(friend) {
			var currentDifference = calculateScoresDifference(myScoresArr, friend.scores);
			if(closestMatch !== null) {
				if(currentDifference < smallestDifference) {
					closestMatch = friend;
					smallestDifference = currentDifference;
				}
			} else {
				closestMatch = friend;
				smallestDifference = currentDifference;
			}
		});
	}
	return closestMatch;
}

Friends.prototype.testDifferenceCalc = function(myScoresArr, otherScoresArr) {
	return calculateScoresDifference(myScoresArr, otherScoresArr);
};
Friends.prototype.parseIntArrayContents = function(arr) {
	return parseIntArrayContents(arr);
};

function calculateScoresDifference(myScoresArr, otherScoresArr) {
	if(!Array.isArray(myScoresArr) || !Array.isArray(otherScoresArr)) {
		throw "Score arrays must be in array form for comparison.";
	}
	if(myScoresArr.length !== otherScoresArr.length) {
		throw "To calculate the difference, score arrays must be same length.";
	}
	var difference = 0;
	for(var i = 0; i < myScoresArr.length; i++) {
		difference += Math.abs(parseInt(myScoresArr[i]) - parseInt(otherScoresArr[i]));
	}
	console.log(difference);
	return difference;
}

function parseIntArrayContents(arr) {
	arr.forEach(function(element, key) {
		var intResult = parseInt(element);
		if(isNaN(intResult)) {
			throw "Input scores must all be integers.";
		}
		arr[key] = intResult;
	});
	return arr;
}

module.exports = Friends;
