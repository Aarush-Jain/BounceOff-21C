var fixedRect, movingRect; GameObject1,GameObject2

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(100, 200, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;

  movingRect = createSprite(100, 700,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  GameObject1 = createSprite(1000, 100, 50, 80);
  GameObject1.shapeColor = "green";
  GameObject1.debug = true;

  GameObject2 = createSprite(400, 100, 50, 80);
  GameObject2.shapeColor = "green";
  GameObject2.debug = true;

  movingRect.velocityY = -5;
  fixedRect.velocityY = +5;
  GameObject1.velocityX = -5;
  GameObject2.velocityX = +5;
}

function draw() {
  background(0,0,0);  

  bounceOff(movingRect,fixedRect);
  bounceOff(GameObject1,GameObject2);
  
 
  drawSprites();
}

