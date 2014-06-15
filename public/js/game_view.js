function GameView(options){
  this.selectors = {
    window: "#game",
    startButton: "#start",
    box: ".box",
    holder: "#circumstances",
    circumstance: ".circumstance",
    doneButton: "#done"
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
  },
  rapture: function(){
    var chosen = []
    var circumstances = $(this.selectors.circumstance)
    for(index in circumstances){
      if(circumstances[index]['data-chosen'] === 'true'){
        // push some identifier to chosen that the game object can use to figure out which models to keep
        chosen.push(circumstances[index])
      }
      else{
        circumstances[index].remove()
      }
    }
  }
}