$(document).ready(function() {

	var topics = ["friend", "mother", "grandparent", "foe", "chef", "pianist", "programmer", "nemesis", "reporter", "lord", "worker", "slob", "migrant", "voyeur", "monk", "father", "companion", "competitor", "boss", "astrophysicist", "listener", "tourist", "patriot", "curmudgeon", "drunk", "hero", "rabblerouser", "dotard"];
	
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


	

				
	//==============================
	//Ajax runs when button clicked
	//==============================

	$('button').on('click', function() {
		var userChoice = $(this).text();
		var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=I10x77v7F60ULe1QizULAvBVQhsOWmKI&q=" + userChoice + "&limit=10&offset=0&rating=G&lang=en";
		
		$.ajax({
			url: queryURL,
			method: "GET"
		}).done(function(data) {
			console.log(data);
		});
	});

});