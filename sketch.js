var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;

var form, player, game;

var cars, car1, car2, car3, car4;

function preload(){
  c1=loadImage("1.png")
  c2=loadImage("2.png")
  c3=loadImage("3.png")
  c4=loadImage("4.png")
  track=loadImage("track.jpeg")
  ground=loadImage("ground.png")
  winner=loadImage("winner.png")
}
function setup(){
  canvas = createCanvas(displayWidth - 20, displayHeight-30);
  database = firebase.database();
  game = new GAME();
  game.getState();
  game.start();
}


function draw(){
  background("yellow")
  if(playerCount === 4){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
  
  
}