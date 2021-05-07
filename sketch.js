const Engine = Matter.Engine;
const World = Matter.World;
const  Bodies = Matter.Bodies;
var bgImg, snowImg
var snows= []

function preload(){
  bgImg= loadImage("snow3.jpg");
  snowImg= loadImage("snow4.webp")
}


function setup() {
  createCanvas(800,400);
  //createSprite(400, 200, 50, 50);
  engine = Engine.create();
  world = engine.world;
  //snow= new Snow(Math.round(random(50,750)),0)
  Engine.run(engine)
}

function draw() {
  background(bgImg);
  if (frameCount%20 === 0) {
    var posX= Math.round(random(50,750))
    snows.push(new Snow(posX,0));
  }
  for (var g = 0; g < snows.length; g++) {
    snows[g].display();
  }
  //snow.display();

  //drawSprites();
}