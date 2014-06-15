function GameServer(){
  this.endpoint = "/circumstances"
  this.listeners = []
}

GameServer.prototype = {
  getCircumstances: function(){
    var request = $.ajax({
      url: this.endpoint,
      type: 'get',
      dataType: 'json'
    })

    request.done(this.giveCircumstances.bind(this))
    request.fail(this.debug.bind(this))
  },
  giveCircumstances: function(response){
    for(var i in this.listeners){
      var listener = this.listeners[i]
      listener.showCircumstances(response)
    }
  },
  registerListener: function(listener){
    this.listeners.push(listener)
  },
  debug: function(response){
    debugger
  }
}