$(document).ready(function() {

	var vacationSpots = ["Florida", "Hawaii", "Guam", "London", "Italy", "Mexico", "Chile", "Thailand", "Malaysia", "Singapore", "California", "Canada"];
	
	//========================================================
	//Generates a button for each of the strings in arr vacationSpots
	//========================================================
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
	// " onclick="getBtnVal(this.id)
	//========================================
	//Generates new button based on user input
	//========================================

	$('#add-spot').on('click', function(event) {
		event.preventDefault();
		var newBtnVal = $('#spot-input').val().trim();
		vacationSpots.push(newBtnVal);
		$('#spot-buttons').append('<button>' + newBtnVal + '</button>');
		renderButtons();
	});

				
	//==============================
	//Ajax runs when button clicked
	//==============================
	
	var userChoice;
	// function getBtnVal(this.id) {
	// 	console.log(this).value();
	// }
	function displayGifs() {

		$('#gif-dump').empty();

		// var userChoice;
		var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=QCC1zuV5uK9phZPARyFYam9OUQW8IZbY&q=" + userChoice + "&limit=10&offset=0&rating=G&lang=en&fmt=json";
		
		$.ajax({
			url: queryURL,
			method: "GET"
		}).done(function(response) {
			console.log(response.data);
			for (i = 0; i < response.data.length; i++) {
  				var imgURL = response.data[i].images.fixed_height_still.url;
  				var rating = response.data[i].rating;	
 				$('#gif-dump').append('<p><img class="gif" src="' + imgURL + '">' + rating + '</p>');	
			};
		});
	};

	$('body').on('click', '.gif', function() {
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

	$('#spot-buttons').on('click', '.nice-buttons', function(event) {
		event.preventDefault();
		$('#gif-dump').empty();
		userChoice = $(this).attr('data-name');
		displayGifs();
	});
	
	renderButtons();

});