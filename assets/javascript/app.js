$(document).ready(function() {

	var topics = ["friend", "mother", "grandparent", "foe", "chef", "pianist", "programmer", "nemesis", "reporter", "lord", "worker", "slob", "migrant", "voyeur", "monk", "father", "companion", "competitor", "boss", "astrophysicist", "listener", "tourist", "patriot", "curmudgeon", "drunk", "hero", "rabblerouser", "dotard"];
	
	//========================================================
	//Generates a button for each of the strings in arr topics
	//========================================================
	function renderButtons() {
		$('#human-buttons').empty();
		$.each(topics, function(i, val) {
			$('#human-buttons').append('<button>' + val);
			console.log(this);
		});
	};

	//========================================
	//Generates new button based on user input
	//========================================

	$('#add-human').on('click', function(event) {
		event.preventDefault();
		var newBtnVal = $('#human-input').val().trim();
		topics.push(newBtnVal);
		$('#human-buttons').append('<button>' + newBtnVal + '</button>');
	});

				
	//==============================
	//Ajax runs when button clicked
	//==============================

	function displayGifs() {

		$('#gif-dump').empty();

		var userChoice;
		var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=I10x77v7F60ULe1QizULAvBVQhsOWmKI&q=" + userChoice + "&limit=10&offset=0&rating=G&lang=en";
		
		$.ajax({
			url: queryURL,
			method: "GET"
		}).done(function(response) {
			console.log(response.data);
			for (i = 0; i < response.data.length; i++) {
				var imgURL = response.data[i].images.fixed_height_small_still.url;
				$('#gif-dump').append('<img class="gif" src=' + imgURL + '">');		
			};
		});
	};

	$('#human-buttons').on('click', function() {
		$('gif-dump').empty();
		var userChoice = $(this).text();
		event.preventDefault();
		displayGifs();
	});
	renderButtons();

});