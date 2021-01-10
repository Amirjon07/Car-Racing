var form,game,player
var gameState=0,playerCount,database,canvas
var allPlayers,distance=0
var car1IMG,car2IMG,car3IMG,car4IMG,trackIMG
var car1,car2,car3,car4,cars
function preload(){
car1IMG=loadImage("car1.png")
car2IMG=loadImage("car2.png")
car3IMG=loadImage("car3.png")
car4IMG=loadImage("car4.png")
trackIMG=loadImage("track.jpg")
}

function setup(){
  database = firebase.database();
  canvas=createCanvas(displayWidth-20,displayHeight-30);

game=new Game()
game.getState()
game.start()
}

function draw(){
if(playerCount==4){
  game.update(1)
}
if(gameState==1){
 clear()
  game.play()

}
if(gameState==2){
  game.end()
}
}

