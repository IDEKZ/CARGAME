class Form{
constructor(){
    this.input=createInput("ENTER YOUR NAME");
    this.button=createButton("PRESS WHEN READY")
    this.greeting=createElement("h5")
}
hide(){
this.greeting.hide()
this.button.hide()
this.input.hide();


}
display(){
var title=createElement("h4");
title.html("Car Game")
title.position(150,0)
this.input.position(400,160)
this.button.position(400,200);
this.button.mousePressed(()=>{
this.input.hide()
this.button.hide()
player.name =this.input.value()
playerCount+=1;
player.index=playerCount
player.update()
player.updateCount(playerCount)
this.greeting.html("hello"+name)
this.greeting.position(200,200)
})
}
}