function GameServer(){
  this.endpoint = "/circumstances"
}

GameServer.prototype = {
  getCircumstances: function(howMany){
    var request = $.ajax({
      url: this.endpoint,
      type: 'get',
      dataType: 'json',
      data: JSON.stringify({'howMany': howMany})
    })

    request.done(this.giveCircumstances.bind(this))
    request.fail(this.debug.bind(this))
  },
  giveCircumstances: function(response){
    this.listener.showCircumstances(response)
  },
  registerListener: function(listener){
    this.listener = listener
  },
  debug: function(response){
    debugger
  }
}