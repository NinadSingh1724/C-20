var fixedRect, movingRect;

function setup() {
  createCanvas(800,400);
  fixedRect = createSprite(200, 200, 50, 80);
  movingRect = createSprite(400,200,80,30);

  fixedRect.debug = true;
  movingRect.debug = true;

  fixedRect.shapeColor = "Red";
  movingRect.shapeColor = "yellow";

  //fixedRect.velocityX = 1;
  movingRect.velocityX = -1;
}

function draw() {
  background(255,255,255);
  
  /*
  movingRect.x = mouseX;
  movingRect.y = mouseY;

  if(movingRect.x - fixedRect.x <= movingRect.width/2 + fixedRect.width/2 &&
    fixedRect.x - movingRect.x <= movingRect.width/2 + fixedRect.width/2 &&
    movingRect.y - fixedRect.y <= movingRect.height/2 + fixedRect.height/2 &&
    fixedRect.y - movingRect.y <= movingRect.height/2 + fixedRect.height/2
    ){
    fixedRect.shapeColor = "blue";
    movingRect.shapeColor = "blue";
  }
  else{
    fixedRect.shapeColor = "Red";
    movingRect.shapeColor = "yellow";
  }
  */

 if(movingRect.x - fixedRect.x <= movingRect.width/2 + fixedRect.width/2 &&
  fixedRect.x - movingRect.x <= movingRect.width/2 + fixedRect.width/2)
  {
    fixedRect.velocityX = fixedRect.velocityX * (-1);
    movingRect.velocityX = movingRect.velocityX * (-1);
  }
  if(movingRect.y - fixedRect.y <= movingRect.height/2 + fixedRect.height/2 &&
  fixedRect.y - movingRect.y <= movingRect.height/2 + fixedRect.height/2
  ){
    fixedRect.velocityY = fixedRect.velocityY * (-1);
    movingRect.velocityY = movingRect.velocityY * (-1);
  }


  drawSprites();
}