if (chosen.length < life.length){
  var diff = life.length - chosen.length
}
else if (life.length === 0){
  var diff = 4;
}



options['database'] || 


// Circumstance template feature creep
data-id="{{id}}"
<i class="fa {{icon}}" data-description = "{{description}}"></i>



//Old KeepChosen (could never delete the whole array- this.life.length became smaller each element that was deleted, so index would become equal to it before every item in the array had been touched)
    for(var index = 0; index < this.life.length; index++){
      if(!this.life[index].chosen){
        this.life.remove(index)
        console.log("index: " + index)
        console.log(this.life[index])
        console.log("length: " + this.life.length)
      }
    }