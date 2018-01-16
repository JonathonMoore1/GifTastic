$(document).ready(function() {
	//======================================
	// Array lists all of our vacation spots
	//======================================
	var vacationSpots = ["Florida", "Hawaii", "Guam", "London", "Italy", "Mexico", "Chile", "Thailand", "Malaysia", "Singapore", "California", "Canada"];
	
	//=========================================================
	// Function renders buttons to the DOM based on array above
	//=========================================================
	function renderButtons() {
		$('#spot-buttons').empty();
		$.each(vacationSpots, function(i, val) {
			var newBtn = $('<button>')
			newBtn.addClass('nice-buttons');
			newBtn.attr('data-name', vacationSpots[i]);
			newBtn.text(vacationSpots[i]);
			$('#spot-buttons').append(newBtn);
			console.log(this);
		});
	};
	
	//======================================================================
	// On-click event takes the value of user input and creates a new button
	//======================================================================

	$('#add-spot').on('click', function(event) {
		event.preventDefault();
		var newBtnVal = $('#spot-input').val().trim();
		vacationSpots.push(newBtnVal);
		$('#spot-buttons').append('<button>' + newBtnVal + '</button>'); // A closing tag was required for some reason
		renderButtons();
	});
			
	//==============================P
	// Ajax gets info and makes gifs
	//==============================

	var userChoice;
	
	function displayGifs() {

		$('#gif-dump').empty();

		var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=QCC1zuV5uK9phZPARyFYam9OUQW8IZbY&q=" + userChoice + "&limit=10&offset=0&rating=G&lang=en&fmt=json";
		
		$.ajax({
			url: queryURL,
			method: "GET"
		}).done(function(response) {
			var results = response.data;
			console.log(results);
			for (i = 0; i < results.length; i++) {	
				 var gifDiv = $('<div class="item">');
				 var rating = results[i].rating;
				 var p = $('<p>').text("Rating: " + rating);
				 var vacImage = $('<img>');
				 vacImage.attr('src', results[i].images.fixed_height_still.url);
				 gifDiv.prepend(p);
				 gifDiv.prepend(vacImage);
				 $('#gif-dump').append(gifDiv);
			};
		});
	};

	//===============================================================================
	// On-click event magically makes our gifs go from still to moving and back again
	//===============================================================================

	$('body').on('click', 'img', function() {
	    var src = $(this).attr("src");
		if($(this).hasClass('playing'))	{
			//stop
			$(this).attr('src', src.replace(/\.gif/i, "_s.gif"));
			$(this).removeClass('playing');
		} else {
			//play
			$(this).addClass('playing');
			$(this).attr('src', src.replace(/\_s.gif/i, ".gif"));
		};
	});

	//==================================================================
	// Use data attribute to log the text of the button the user chooses
	//==================================================================

	$('#spot-buttons').on('click', '.nice-buttons', function(event) {
		event.preventDefault();
		$('#gif-dump').empty();
		userChoice = $(this).attr('data-name');
		displayGifs();
	});
	
	renderButtons();

});