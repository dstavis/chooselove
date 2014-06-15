function GameView(options){
  this.selectors = {
    window: "#game",
    startButton: "#start",
    box: ".box",
    holder: "#circumstances",
    circumstance: ".circumstance"
  }
  this.templates = {
    box: "#_box",
    circumstance: "#_circumstance"
  }
}

GameView.prototype = {
  clearScreen: function(){
    $(this.selectors.startButton).remove()
  },
  displayBox: function(){
    var box = this.makeNode(this.templates.box)
    $(this.selectors.window).append(box)
  },
  drawCircumstance: function(circumstance){
    var circumstanceNode = this.makeNode(this.templates.circumstance, circumstance)
    $(this.selectors.holder).append(circumstanceNode)
  },
  makeNode: function(selector, context){
    var source   = $(selector).html();
    var template = Handlebars.compile(source);
    var html    = template(context);
    return html
  },
  markChosen: function(circumstanceNode){
    circumstanceNode['data-chosen'] = 'true'
  }
}