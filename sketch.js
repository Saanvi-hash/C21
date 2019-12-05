var movingRect , fixedRect
var box1 ,box2 ,box3 ,box4

function setup() {
  createCanvas(1200,800);
  movingRect = createSprite (200,200,50,80);
  movingRect.shapeColor = "green";
  fixedRect = createSprite (200,200,80,50);
  fixedRect.shapeColor = "green";
  box1 = createSprite(100,100,50,50);
  box1.shapeColor = "green";
  box2 = createSprite(300,100,50,50);
  box2.shapeColor = "green";
  box3 = createSprite (500,100,50,50);
  box3.shapeColor = "green";
  box4 = createSprite (700,100,50,50);
  box4.shapeColor = "green";
  //movingRect.velocityY = -5;
  //fixedRect.velocityY = +5;
}

function draw() {
  background(0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

   
   if (isTouching(movingRect,fixedRect)) {
    movingRect.shapeColor = "red";
    fixedRect.shapeColor = "red";
   }

   else {
    movingRect.shapeColor = "green";
    box3.shapeColor = "green";
    } 
  // bounceOff(movingRect,fixedRect);

  drawSprites();
}
