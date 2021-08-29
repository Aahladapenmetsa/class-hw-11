var trackImg;
var shipImg;
function preload(){

trackImg = loadImage("path.png");
runnerImg = loadImage ("Runner-1.png","Runner-2.png");
}

function setup(){
  createCanvas(600,400);
  track = createSprite (250,100);
  track.addImage("flow", trackImg);
  track.scale = 1;
  track.velocityY = -3;
  runner = createSprite (250,300)
  runner.addImage("run",runnerImg);
  runner.scale = 0.10;
}

function draw() {
  background("black");
  if(track.y < 0){
  track.y = height/2;
  }
 drawSprites();
  }