function GameView(options){
  this.selectors = {
    window: "#game",
    startButton: "#start",
    box: ".box",
    holder: "#circumstances",
    circumstance: ".circumstance",
    nextButton: "#next",
    doneButton: "#done",
    messageHolder: "#messageHolder",
    message: ".message",
    turn: ".turn"
  }
  this.templates = {
    box: "#_box",
    circumstance: "#_circumstance",
    nextButton: "#_next",
    doneButton: "#_done"
  }

}

GameView.prototype = {
  clearStart: function(){
    $(this.selectors.startButton).remove()
  },
  showBox: function(){
    var box = this.makeNode(this.templates.box)
    $(this.selectors.window).append(box)
  },
  showCircumstance: function(circumstance){
    var circumstanceNode = this.makeNode(this.templates.circumstance, circumstance)
    $(this.selectors.holder).append(circumstanceNode)
  },
  setTurn: function(turnNumber){
    $(this.selectors.turn).text(turnNumber.toString())
  },
  showNextButton: function(){
    var nextButton = this.makeNode(this.templates.nextButton)
    $(this.selectors.window).append(nextButton)
  },
  showDoneButton: function(){
    $(this.selectors.nextButton).remove()
    var doneButton = this.makeNode(this.templates.doneButton)
    $(this.selectors.window).append(doneButton)
  },
  showBadMessage: function(){
    $(this.selectors.message).text("Choose what you don't want")
  },
  showGoodMessage: function(){
    $(this.selectors.message).text("Choose what you want")
  },
  showWaitMessage: function(){
    $(this.selectors.message).text("OK thanks. Please wait while we calculate more of your life...")
  },
  makeNode: function(selector, context){
    var source   = $(selector).html();
    var template = Handlebars.compile(source);
    var html    = template(context);
    return html
  },
  markChosen: function(circumstanceNode){
    console.log('clicked')
    circumstanceNode.classList.add('chosen')
  },
  clearBox: function(){
    $(this.selectors.box).remove()
  },
  clearDone: function(){
    $(this.selectors.doneButton).remove()
  }
}