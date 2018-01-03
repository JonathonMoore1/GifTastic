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

		$('gif-dump').empty();

		var userChoice;
		var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=I10x77v7F60ULe1QizULAvBVQhsOWmKI&q=" + userChoice + "&limit=10&offset=0&rating=G&lang=en";
		
		$.ajax({
			url: queryURL,
			method: "GET"
		}).done(function(data) {
			console.log(data);

			for (i = 0; i < data.length; i++) {
				var rating = $('<p>') + data[i].rating;
				var stillImgURL = data[i].images.fixed_height_small_still.url;
				var stillImage = $('<img>').attr('src', stillImgURL);
				var a = $('<div>');
				a.addClass('monster');
				a.append(rating + stillImage);
				$('#gif-dump').html(a);
				console.log(rating);
			};


			//Notes: loop through the arrays generated by ajax and 
			//append rating and image of each to the #gif-dump.
			//for (i = 0; i < data.length; i++) {

				/*var gifDump = $('#gif-dump');
				var gifDiv = $('<div>' + rating + image);
				gifDiv.addClass('gif-goes-here');
				var rating = $('<p>').text(data.rating);
				var imgURL = data.bitly_gif_url;
				var image = $('<img>').attr('src', imgURL);

				gifDump.append(gifDiv);

				alert(data[0].rating);*/

				/*var a = $('<div>');
				a.addClass("gif-goes-here");
				a.attr('data-rating', data[i].rating);
				a.text(data[i].rating);
				$('#gif-dump').append(a);*/

				/*var dataArr = data[i];

				dataArr.forEach(function ())

				var gifDiv = $('<div>');
	
				var rating = $('<p>' + dataArr.rating + '</p>');
	
				console.log(rating);
				var imgURL = dataArr.bitly_gif_url;
				var image = $('<img>').attr('src', imgURL);

				$('#gif-dump').append('.gif-div');*/
			//};
		});
	};

	$('#human-buttons').on('click', function() {
		var userChoice = $(this).text();
		event.preventDefault();
		displayGifs();
	});
	renderButtons();

});