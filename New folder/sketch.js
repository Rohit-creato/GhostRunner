var tower, towerImg;
var door , doorImg, doorsGroup;
var  climber, climberImg, climbersGroup;
var ghost, ghostImg
var iBGroup, iB
var gameState="play"
function preload(){
  towerImg=loadImage("tower.png");
  doorImg=loadImage("door.png");
  climberImg=loadImage("climber.png");
  ghostImg=loadImage("ghost-standing.png");
}
function setup(){
  createCanvas(600,600);
  
  tower=createSprite(300,300);
  tower.addImage("tower",towerImg);
  tower.velocityY=1;
  
  doorsGroup= new Group();
  
  climbersGroup= new Group();
  iBGroup= new Group();
  
  ghost=createSprite(200,200,50,50);
  ghost.scale=0.3;
  ghost.addImage("ghost",ghostImg);
}
function draw(){
 background(0);
  
  if(gameState==="play"){
    
  
  
  
  if(tower.y>400){
    tower.y=300;
    
    
  }
  
  if(keyDown("left_arrow")){
ghost.x=ghost.x-3;
}
  
  if(keyDown("right_arrow")){
ghost.x=ghost.x+3;
     
}
  if(keyDown("space")){
ghost.velocityY=-5;
}
  ghost.velocityY=ghost.velocityY+0.8;
  if(climbersGroup.isTouching(ghost)){
    ghost.velocityY=0;
  }
  if(iBGroup.isTouching(ghost)||ghost.Y>600){
    ghost.destroy();
    gameState="end"
  }
  spawnDoors();
  drawSprites();
  
  }
  if(gameState==="end"){
    stroke("blue")
    fill("blue")
    textSize(30);
    text("gameover",230,250)
  }
  
}
function spawnDoors(){
  if(frameCount%240===0){
  var door=createSprite(200,-50)  
    door.addImage(doorImg);
    
    var climber=createSprite(200,10)  
    climber.addImage(climberImg);
      var iB=createSprite(200,15)
      iB.width=climber.width
    iB.height=2;
    door.x=Math.round(random(120,400))
    door.velocityY=1
    
    climber.x=door.x
    climber.velocityY=1
    
    iB.x=door.x
    iB.velocityY=1
    
    ghost.depth=door.depth
    ghost.depth+=1;
    
    door.lifetime=800;
    climber.lifetime=800;
    
    doorsGroup.add(door)
    climbersGroup.add(climber)
    iB.debug=true;
    iBGroup.add(iB);
  }
  
  
  
  
  
  
}
