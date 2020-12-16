class Game{
constructor(){
}
getState(){
var gameStateREF=database.ref("gameState");
gameStateREF.on("value", function(data){
gameState=data.val();
})
}
update(state){
    database.ref("/").update({

        gameState:state
    })
}
async start(){
    if (gameState===0){
        player=new Player();
        var playerCountREF=await database.ref(playerCount).once("value")
        if(playerCountREF.exists()){
            playerCount=playerCountREF.val();
            player.getCount();
                }
        form = new Form();
        form.display();
    }
}
play(){
    form.hide()
    text("GAME IS STARTING",500,200)
    Player.getPlayerInfo()
    if(allPlayer!==undefined){
var displayP=150
for (var plr in allPlayer){
    if(plr==="player"+player.index)
    fill("red")
    else
    fill("black")

displayP+=20
text(allPlayer[plr].name+" "+allPlayer[plr].distance,180,displayP)
    }
}
if(keyIsDown(UP_ARROW)&&player.index!==null){
player.distance+=20;
player.update()
}
}
}