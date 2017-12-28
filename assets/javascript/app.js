$(document).ready(function() {

	var topics = ["friend", "mother", "grandparent", "foe", "chef", "pianist", "programmer", "nemesis", "archduke", "lord", "worker", "slob", "migrant", "voyeur", "monk", "father", "companion", "competitor", "boss", "astrophysicist", "listener", "tourist", "patriot", "curmudgeon", "drunk", "hero", "rabblerouser", "dotard"];


	$.each(topics, function(i, val) {
		$('#human-buttons').append('<button>');
		/*$('button').each(function() {
			$(this).text(topics[i]);
		});*/
		$('button').append(val + '');
		console.log(this);
	});

	

});