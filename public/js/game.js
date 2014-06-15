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
    while(this.alive){
      this.startTurn()
    }
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
  },
  markChosen: function(e){
    var chosen = this.view.rapture()
    var isChosen = false
    for(var index in this.life){
      for(var secondIndex in chosen){
        if(this.life[index] === chosen[secondIndex]){
          isChosen = true
        }
      }
      if(isChosen){
        this.life[index].choose()
      }
    }
  },
  cleanLife: function(){
    for(var index in this.life){
      if(this.life[index].chosen === false){
        this.life.remove(index)
      }
    }
  }
}