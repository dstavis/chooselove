$(document).ready(function() {
  var gameObject = new Game()
	$('#start').on('click', gameObject.start.bind(gameObject))
});