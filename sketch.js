const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var boy,boyImage
var rock
var string
var stone3
var stoneImage
var rock2
var land
var land2
var enemies,enemyImage
var obstacle,obstacleImage
var stoneCount = 0
var rockGroup,enemyGroup
function preload(){
    boyImage = loadImage("boy.png")
    stoneImage = loadImage("stone.png")
    enemyImage = loadAnimation("image1.jpg","image2.jpg","image3.jpg","image4.jpg")
    obstacleImage = loadImage("arrow.webp")
}
function setup(){
    createCanvas(1275,600)
    engine = Engine.create();
    world = engine.world;
    land = new Ground(width/2,height-40,width+200,20)
    Engine.run(engine);
    land2 = createSprite(land.x,land.y,land.width,land.height)
    land2.velocityX = -10
    boy = createSprite(300,485,1,1)
	boy.addImage("a",boyImage)
	boy.scale = 0.1  
    rockGroup = new Group()
    enemyGroup = new Group()
}
function draw(){
    background("white")
    if (land2.x<width/2){
       land2.x = land2.width/2
    }
    boy.collide(land2)
    if(boy.isTouching(rockGroup)){
rockGroup.destroyEach()
stoneCount++
    }
    boy.velocityY = boy.velocityY+0.5
    if (keyDown("space")&&boy.y>450){
    boy.velocityY = -11
    }

    rocks()
    enemy()
    land.display()
    drawSprites()
}
function enemy(){
    if (frameCount % 500 == 0){
 enemies = createSprite(width+30,height/2,0,0)
 enemies.addAnimation("a",enemyImage)
 enemies.velocityX = -17
    }
    if (frameCount % 100 == 0){
    obstacle = createSprite(width+30,500,0,0)
    obstacle.addImage("a",obstacleImage)
    obstacle.velocityX = -15
    obstacle.scale = 0.25
    }
}
function rocks(){
    if (frameCount % 200 == 0){
      stone3 = createSprite(width+30,land2.y-30,0,0)
      stone3.addImage("a",stoneImage)
      stone3.scale = 0.1
      stone3.velocityX = -7.5
    }
    rockGroup.add(stone3)
}
