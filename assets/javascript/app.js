$(document).ready(function() {

	var topics = ["friend", "mother", "grandparent", "foe", "chef", "pianist", "programmer", "nemesis", "archduke", "lord", "worker", "slob", "migrant", "voyeur", "monk", "father", "companion", "competitor", "boss", "astrophysicist", "listener", "tourist", "patriot", "curmudgeon", "drunk", "hero", "rabblerouser", "dotard"];
	
	//========================================================
	//Generates a button for each of the strings in arr topics
	//========================================================
	$.each(topics, function(i, val) {
		$('#human-buttons').append('<button>' + val);
		console.log(this);
	});


	//========================================
	//Generates new button based on user input
	//========================================
	$('#add-human').on('click', function(event) {
		var newBtnVal = $('#human-input').val();
		$('#human-buttons').append('<button>' + newBtnVal + '</button>');
		event.preventDefault();
	});


	//=========================
	//API links and ajax set-up
	//=========================
	
});