$(function(){
	$('body').append('<h1>Yun Oh!</h1>');
	var url = 'http://api.rottentomatoes.com/api/public/v1.0/movies.json';
	$.ajax({
		url: url,
		data: {
			q: 'batman',
			apiKey: 'hcrurhsttexasrgfm2y6yahm'
		},
			dataType: 'jsonp',
			success: showMovies
	});
	function showMovies(response){
		console.log(response);
		for(i=0;i<response.movies.length;i++){
			var movie = response.movies[i];
			$('body').append('<h3>' +movie.title+ '</h3>');
			$('body').append('<img src="' +movie.posters.thumbnail+'"/>');
		}
	}
	
});

// eto yung tama yng asa baba
/*$(function(){
	$('body').append('<h1>Movies</h1>');
	var site = 'http://api.rottentomatoes.com/api/public/v1.0/movies.json';
	$.ajax({
		url: site,
		data: {
			q: 'american pie',
			apiKey: 'hcrurhsttexasrgfm2y6yahm'
		},
		dataType: 'jsonp',
		success: showMovies
	});
	
	function showMovies(response){
		console.log(response);
		for(i = 0; i<response.movies.length; i++){
			var movie = response.movies[i];
			$('body').append('<h3>' +movie.title+ '</h3>');
			$('body').append('<img src="' +movie.posters.thumbnail+ '"/>');
		}
	}
});*/