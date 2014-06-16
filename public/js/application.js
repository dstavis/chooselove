$(document).ready(function() {
  var gameObject = new Game({lifeSize: 4})
	$('#start').on('click', gameObject.start.bind(gameObject))
});