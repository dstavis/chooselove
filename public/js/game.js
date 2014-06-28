function Game(options){
  var options = options || {}

  this.alive = true
  this.life = []
  this.currentChoices = []
  this.turn = 0
  this.circumstancesPerTurn = options['lifeSize'] || 5
  this.view = options['gameView'] || new GameView()
  this.database = options['database'] || new GameServer()
}

Game.prototype = {
  start: function(){
    this.database.registerListener(this)
    this.view.clearStart()
    this.setCircumstanceListener()
    this.startTurn(this.circumstancesPerTurn)
  },
  startTurn: function(howMany){
    this.turn += 1
    this.view.setTurn(this.turn)
    this.view.showBox()
    this.view.showBadMessage()

    this.database.getCircumstances(howMany)

    this.view.showNextButton()
    this.setNextListener()
  },
  showCircumstances: function(circumstances){
    for(var index = 0; index < circumstances.length; index++){
      this.life.push(new Circumstance(circumstances[index]))
    }
    for (var index = 0; index < this.life.length; index++){
      var circumstanceNode = this.view.makeNode(this.view.templates.circumstance, this.life[index])
      this.view.showCircumstance(circumstanceNode)
    }
  },
  setCircumstanceListener: function(){
    $(this.view.selectors.window).on('click', this.view.selectors.circumstance, this.choose.bind(this))
  },
  setNextListener: function(){
    $(this.view.selectors.nextButton).on('click', this.nextPhase.bind(this))
  },
  choose: function(e){
    console.log("clicked a circumstance")
    this.view.markChosen(e.target)
    this.markChosen($(e.target).attr('data-id'))
  },
  markChosen: function(targetId){
    for(var index = 0; index < this.life.length; index++){
      console.log("choosing")
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
    this.life = this.life.filter(this.isChosen)
  },
  isChosen: function(circumstance, index){
    circumstance.chosen
  }
}