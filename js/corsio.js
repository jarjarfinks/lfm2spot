function getRadio(radioType) {
	console.log("========================================");
	console.log("Start Copy Here");
	console.log("========================================");
	var input = document.getElementById('username');
	username = input.value;
	console.log("- Username Field Value: " + username);
	var url = "http://cors.io/?u=" + "http://www.last.fm/player/station/user/" + username + radioType;
	console.log("- Request URL generated: " + url);
	var request = new XMLHttpRequest();
	console.log("- Request Generated");
	request.open('GET', url, true);
	console.log("- Request Open");
	request.onload = function () {
		if (request.status >= 200 && request.status < 400) {
			var data = JSON.parse(request.responseText);
			console.log("- JSON Data Parsed");
			var playlinksId = new Array();
			console.log("- playLinksId variable created");
			var playlinksUrl = new Array();
			console.log("- playlinksUrl variable created");
			var comboOutput = new Array();
			console.log("- comboOutput variable created");
			var spotifyUrl;
			console.log("- spotifyUrl variable created");
			var spotifyPlayerHTML;
			console.log("- spotifyPlayerHTML variable created");
			for (i = 0; i < data.playlist.length; i++) {
				playlinksId[i] = data.playlist[i].playlinks[0].id;
				console.log("- playinksId[x]: " + playlinksId[i]);
			}
			for (i = 0; i < data.playlist.length; i++) {
				playlinksUrl[i] = data.playlist[i].playlinks[0].url;
				console.log("- playlinksUrl[x]: " + playlinksUrl[i]);
			}
			comboOutput = playlinksUrl.join("\n  ");
			console.log("- playlinksUrl formatted with newlines");
			document.getElementById("result").innerHTML = comboOutput;
			console.log("- Result field filled");
		}else if(request.status == 503){
		document.getElementById("result").innerHTML = "Connection Error. The application may be overloaded."
		} else {
			console.log("Server returned an error!");
		}
		/*spotifyUrl = "http://cors.io/?u=https://embed.spotify.com/?uri=spotify:trackset:PREFEREDTITLE:" + playlinksId;
		console.log("- spotifyUrl created: " + spotifyUrl);
		spotifyPlayerHTML = document.getElementById("spotifyPlayer");
		console.log("- spotifyPlayerHTML assigned to element");
		spotifyPlayerHTML.src = spotifyUrl;
		console.log("- spotifyPlayerHTML sourced changed for embed player");
		console.log("========================================");
		console.log("End Copy Log");
		console.log("========================================");
		*/
	};
	request.onerror = function () {		
		document.getElementById("result").innerHTML = "Connection Error. The application may be overloaded. Try again later"
		console.log("Connection error!");
	};
	request.send();
}
function getSimilarArtist(artist) {
	console.log("========================================");
	console.log("Start Copy Here");
	console.log("========================================");
	console.log("- Artist Field Value: " + artist);
	var url = "http://cors.io/?u=" + "http://www.last.fm/player/station/music/" + artist;
	console.log("- Request URL generated: " + url);
	var request = new XMLHttpRequest();
	console.log("- Request Generated");
	request.open('GET', url, true);
	console.log("- Request Open");
	request.onload = function () {
		if (request.status >= 200 && request.status < 400) {
			var data = JSON.parse(request.responseText);
			console.log("- JSON Data Parsed");
			var playlinksId = new Array();
			console.log("- playLinksId variable created");
			var playlinksUrl = new Array();
			console.log("- playlinksUrl variable created");
			var comboOutput = new Array();
			console.log("- comboOutput variable created");
			var spotifyUrl;
			console.log("- spotifyUrl variable created");
			var spotifyPlayerHTML;
			console.log("- spotifyPlayerHTML variable created");
			for (i = 0; i < data.playlist.length; i++) {
				playlinksId[i] = data.playlist[i].playlinks[0].id;
				console.log("- playinksId[x]: " + playlinksId[i]);
			}
			for (i = 0; i < data.playlist.length; i++) {
				playlinksUrl[i] = data.playlist[i].playlinks[0].url;
				console.log("- playlinksUrl[x]: " + playlinksUrl[i]);
			}
			comboOutput = playlinksUrl.join("\n  ");
			console.log("- playlinksUrl formatted with newlines");
			document.getElementById("artistResult").innerHTML = comboOutput;
			console.log("- Result field filled");
		} else {
			console.log("Server returned an error!");
		}
		spotifyUrl = "http://cors.io/?u=https://embed.spotify.com/?uri=spotify:trackset:PREFEREDTITLE:" + playlinksId;
		console.log("- spotifyUrl created: " + spotifyUrl);
		spotifyPlayerHTML = document.getElementById("spotifyPlayer");
		console.log("- spotifyPlayerHTML assigned to element");
		spotifyPlayerHTML.src = spotifyUrl;
		console.log("- spotifyPlayerHTML sourced changed for embed player");
		console.log("========================================");
		console.log("End Copy Log");
		console.log("========================================");
	};
	request.onerror = function () {
		console.log("Connection error!");
	};
	request.send();
}
function clip(text) {
	var copyElement = document.createElement('input');
	copyElement.setAttribute('type', 'text');
	copyElement.setAttribute('value', text);
	copyElement = document.body.appendChild(copyElement);
	copyElement.select();
	try {
		if (!document.execCommand('copy'))
			throw 'Not allowed.';
	} catch (e) {
		copyElement.remove();
		console.log("document.execCommand('copy'); is not supported");
		prompt('Copy the text below. (ctrl c, enter)', text);
	}
	finally {
		if (typeof e == 'undefined') {
			copyElement.remove();
		}
	}
}
function copy(input) {
	var finished;
	var error;
	try {
		clip(input);
	} catch (e) {
		console.log("there was an error");
		if (e == 'ReferenceError: clip is not defined') {
			console.log("connection error");
		} else {
			console.log("please report this error");
		}
		error = e;
	}
	finally {
		if (typeof error === 'undefined') {
			console.log("Copy worked!");
			finished = true;
		}
	}
}
function copyResults() {
	var results = document.getElementById('result');
	var resValue = results.innerHTML;
	copy(resValue);
}
function copyArtistResults() {
	var results = document.getElementById('artistResult');
	var resValue = results.innerHTML;
	copy(resValue);
}
