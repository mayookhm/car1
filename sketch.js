var car,wall;
var speed,weight;

function setup() {
 createCanvas(900,900);
  car = createSprite(200, 200, 50, 50);
  wall = createSprite(400,200,150,250);
  var options = {
    isStatic: true
  }
}

function draw() {
  background(255,255,255); 
   car.velocityX = 5;
  drawSprites();
}