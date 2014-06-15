function Circumstance(object) {
  this.description = object['description']
  this.icon = object['icon']
  this.clicked = false
}

Circumstance.prototype = {
  click: function(){
    this.clicked = true
  }
}