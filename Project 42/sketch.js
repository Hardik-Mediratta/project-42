var monkey, monkey_running
var ground;
var FoodGroup, obstacleGroup
var score =0;
var bananaImage, bananaGroup;
var obstacleImage, obstacleGroup;
var survivalTime;
var score;
var invisibleGround;

function preload() {


  monkey_running = loadAnimation("Monkey_01.png", "Monkey_02.png", "Monkey_03.png", "Monkey_04.png", "Monkey_05.png", "Monkey_06.png", "Monkey_07.png", "Monkey_08.png", "Monkey_09.png","Monkey_10.png")

  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("stone.png");
  groundImage = loadImage("jungle.jpg")
}



function setup() {
  
  survivalTime = 0;
  score = 0;
  
  ground = createSprite(900, 150, 1500, 10);
  ground.addImage("ground",groundImage);
  ground.velocityX = -4;
  ground.x = ground.width / 2;


  monkey = createSprite(80, 315, 20, 20);
  monkey.addAnimation("moving", monkey_running)
  monkey.scale = 0.1;

  
  
  invisibleGround = createSprite(250,350,700000000000000,20)
 monkey.setCollider("rectangle",0,0,monkey.width,monkey.height);
   
  
  bananaGroup = new Group();

  
  
  obstacleGroup = new Group();

 
}

function draw() {
  createCanvas(500, 400)
  
  


  
food();
obstacles();




  if (ground.x < 0) {
    ground.x = ground.width / 2;
  }

  monkey.collide(invisibleGround);
  if (keyDown("space") && monkey.y >= 200) {
    monkey.velocityY = -10;
  }
  monkey.velocityY = monkey.velocityY + 0.4;


invisibleGround.visible = false;

  

  if (monkey.isTouching(bananaGroup)) {
    bananaGroup.destroyEach();
    score = score + 1
    monkey.scale = +0.2;
  }
   


   
  drawSprites();

  stroke("white");
  textSize(20);
  fill("white");
  text("Score: " + score, 400, 50);

  stroke("black");
  textSize(20);
  fill("black");
  survivalTime = Math.ceil(frameCount / 35)
  text("Survival Time: " + survivalTime, 100, 50);

  if (monkey.isTouching(obstacleGroup)) {
    stroke("white");
    textSize(50);
    fill("white");
    text("Game over",150,200)
    obstacle.velocityX = 0;
    banana.velocityX = 0;
    ground.velocityX = -4;
    }

}



function food() {
  if (frameCount % 80 === 0) {
    var banana = createSprite(400, 170, 10, 40);
    banana.y = Math.round(random(120, 200));
    banana.addImage(bananaImage); 
    banana.scale = 0.1
    banana.velocityX = -3;
    bananaGroup.add(banana);
  }


}

function obstacles() {
  if (frameCount % 100 === 0) {
    var obstacle = createSprite(420, 290, 20, 30);
    obstacle.addImage(obstacleImage);
    obstacle.scale = 0.3
    obstacle.velocityX = -6;
    obstacleGroup.add(obstacle);
    obstacle.debug = true;
  }

 


}