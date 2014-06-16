function Game(options){
  this.alive = true
  this.life = []
  this.currentChoices = []
  this.turn = 0
  this.circumstancesPerTurn = options['lifeSize'] || 4
  this.view = options['gameView'] || new GameView()
  this.database = options['database'] || new GameServer()
}

Game.prototype = {
  start: function(){
    this.database.registerListener(this)
    this.view.clearStart()
    this.startTurn()
  },
  startTurn: function(howMany){
    var howMany = howMany || 5

    this.turn += 1
    this.view.setTurn(this.turn)
    this.view.showBox()
    this.view.showBadMessage()

    this.database.getCircumstances(howMany)

    this.view.showNextButton()
    this.setNextListener()
  },
  showCircumstances: function(circumstances){
    for(var index in circumstances){
      this.life.push(new Circumstance(circumstances[index]))
    }
    for (var index in this.life){
      this.view.showCircumstance(this.life[index])
      this.setCircumstanceListeners()
    }
  },
  setCircumstanceListeners: function(){
    $(this.view.selectors.circumstance).on('click', this.choose.bind(this))
  },
  setNextListener: function(){
    $(this.view.selectors.nextButton).on('click', this.nextPhase.bind(this))
  },
  choose: function(e){
    this.view.markChosen(e.target)
    this.markChosen($(e.target).attr('data-id'))
  },
  markChosen: function(targetId){
    for(var index in this.life){
      if(this.life[index].id == targetId){
        this.life[index].chosen = true
        return
      }
    }
  },
  nextPhase: function(){
    this.view.showGoodMessage()
    this.view.showDoneButton()
    this.setDoneListener()
  },
  nextTurn: function(){
    this.view.clearDone()
    this.view.clearBox()
    this.view.showWaitMessage()

    this.keepChosen()
    var diff = this.circumstancesPerTurn - this.life.length
    this.startTurn(diff)
  },
  setDoneListener: function(){
    $(this.view.selectors.doneButton).on('click', this.nextTurn.bind(this))
  },
  keepChosen: function(){
    for(var index in this.life){
      if(!this.life[index].chosen){
        this.life.remove(index)
      }
    }
  }
}