
var monkey, monkey_running;
var banana, bananaImage, obstacle, obstacleImage;
var FoodGroup, obstacleGroup;
var score;
var ground;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png");
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
  
}



function setup() {
  createCanvas(600, 600);
  monkey = createSprite(100, 400, 50, 50);
  monkey.addAnimation("moving", monkey_running);
  monkey.scale = 0.1;
  ground = createSprite(300, 430, 1200, 10);
  ground.velocityX = -3;
  ground.x = ground.width/2;
  
  
  
  score = 0;
  
  FoodGroup = new Group();
  obstacleGroup = new Group();
}


function draw() {
  background(240);
  
  textSize(20);
  text("survival time:"+score, 220, 40);
  
  score = score + Math.round(getFrameRate()/60);
  
  if(ground.x < 0){
    ground.x = ground.width/2;
  }
  
  if(keyWentDown("space")){
    monkey.velocityY = -10;
  }
  monkey.velocityY = monkey.velocityY + 0.7;
  monkey.collide(ground);
  
  bananas();
  obstacles();
  
  
  
  drawSprites();
}



function bananas(){
  if(frameCount%80 ===0) {
    banana = createSprite(600, 300, 10, 10);
    banana.addImage(bananaImage);
    banana.velocityX = -8;
    banana.scale = 0.1;
    banana.y = Math.round(random(200, 400));
    banana.lifetime = 100;
    FoodGroup.add(banana);
  }
}


function obstacles(){
  if(frameCount%300 === 0){
    obstacle = createSprite(600, 400, 20, 20);
    obstacle.addImage(obstacleImage);
    obstacle.velocityX = -10;
    obstacle.scale = 0.2;
    obstacle.lifetime = 80;
    obstacleGroup.add(obstacle);
    
    
    
  }
  
  
}
