function Circumstance(object) {
  this.description = object['description']
  this.icon = object['icon']
  this.chosen = false
}

Circumstance.prototype = {
  choose: function(){
    this.chosen = true
  }
}