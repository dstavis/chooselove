function Game(options){
  this.alive = true
  this.life = []
  this.currentChoices = []
  this.circumstancesPerTurn = options['lifeSize'] || 4
  this.view = options['gameView'] || new GameView()
  this.database = options['database'] || new GameServer()
}

Game.prototype = {
  start: function(){
    this.database.registerListener(this)
    // while(this.alive){
      this.startTurn()
    // }
  },
  startTurn: function(life, chosen){
    this.view.clearScreen()
    this.view.displayBox()
    this.database.getCircumstances()
  },
  showCircumstances: function(circumstances){
    for(var index in circumstances){
      this.life.push(new Circumstance(circumstances[index]))
    }
    for (var index in this.life){
      this.view.drawCircumstance(this.life[index])
      this.setCircumstanceListeners()
    }
  },
  setCircumstanceListeners: function(){
    $(this.view.selectors.circumstance).on('click', this.choose.bind(this))
  },
  choose: function(e){
    this.view.markChosen(e.target)
  }
}