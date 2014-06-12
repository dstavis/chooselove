/*
1. Present the title screen and Start button
  Add an event listener to the start button
2. When the start button is clicked, initialize the game and present the phase 1 screen
3. Phase 1 screen:   // render a box to the screen
  // div, long rectangle, rounded border, heading says "Your life"

*/    

// User stories:
// MVP:
//   As a player, I start a turn with some circumstances that make up my life
//   As a player, I get to choose what I don't want in my life
//   As a player, I get to choose what I want/love in my life
//   As a player, I can choose to turn away at any time during my turn rather than select more things that I don't want
//   As a player, whatever I chose in the previous turn (which round I chose it in is irrelevant) will return in the next turn for sure
  
// It. 1:
//   As a player, I have a chance of dying at any time
//   As a player, I can see how my life went when I die (as a log of circumstances from each turn in order)

// It. 2:
//   As a player, if I turn away three times without selecting anything that I dislike, the dislike round will go away
//   As a player, there is a limit to how many things I can choose in each round
//   As a player, the limit for the things I can dislike starts higher than things I can love
//   As a player, if I choose not to dislike anything, the limit for things I can love increases and the limit for things I can dislike decreases




var startGame = function(lifeSize){
  var Game = {
    alive: true,
    life: [],
    currentChoices: [],
    lifeSize: lifeSize,
    view: new GameView()
  }

  while(Game.alive){
    Game.startTurn
  }
}

Game.prototype = {
  startTurn: function(life, chosen){
    if (chosen.length < life.length){
      var diff = life.length - chosen.length
    }
    else if (life.length === 0){
      var diff = 4;
    }
    Game.getCircumstances(diff)
  },
  getCircumstances: function(howMany){
    var request = $.ajax({
      url: "",
      type: "get",
      dataType: "JSON",
      data: {"howMany": howMany}
    })

    request.done(this.giveCircumstances)
    request.fail(this.debug)
  },
  giveCircumstances: function(response){
    debugger
    // serveLife()
  },
  debug: function(response){
    debugger
  }
}