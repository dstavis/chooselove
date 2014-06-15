$(document).ready(function() {
  var game = new Game({lifeSize: 4})
	$('#start').on('click', game.start.bind(game))
});