var Friends = function() {
	this.friends = [];
};
Friends.prototype.addFriend = function(name, photo, scoresArray) {
	var friend = {
		name: name,
		photo: photo,
		scores: scoresArray
	};
	this.friends.push(friend);
};
Friends.prototype.getAllFriends = function() {
	return this.friends;
};
module.exports = Friends;
