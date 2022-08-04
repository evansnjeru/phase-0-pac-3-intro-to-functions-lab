function shout(str) {
	return str.toUpperCase();
}

function whisper(str) {
	return str.toLowerCase();
}

function logShout(str) {
	console.log(shout(str));
}

function logWhisper(str) {
	console.log(whisper(str));
}

function sayHiToHeadphonedRoommate(str) {
	if (str === shout(str))
		return "YES INDEED!" 
	else if (str === whisper(str))
		return "I can't hear you!"
	else if (str === "Let's have dinner together!")
		return "I would love to!"
}
