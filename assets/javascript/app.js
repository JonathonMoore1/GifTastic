$(document).ready(function() {

	var topics = ["friend", "mother", "grandparent", "foe", "chef", "pianist", "programmer", "nemesis", "archduke", "lord", "worker", "slob", "migrant", "voyeur", "monk", "father", "companion", "competitor", "boss", "astrophysicist", "listener", "tourist", "patriot", "curmudgeon", "drunk", "hero", "rabblerouser", "dotard"];

	//========================================================
	//Generates a button for each of the strings in arr topics
	//========================================================
	$.each(topics, function(i, val) {
		$('#human-buttons').append('<button>' + val);
		console.log(this);
	});

	

});