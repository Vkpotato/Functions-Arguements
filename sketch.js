var fixedRect, movingRect;

function setup() {
  createCanvas(1200,800);
  Rect2 = createSprite(400, 100, 50, 80);
  Rect2.shapeColor = "green";
  Rect2.debug = true;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  movingRect.velocityY = -5;
  Rect2.velocityY = +5;
}

function draw() {
  background(0,0,0);  

  bounceOff(movingRect,Rect2);

  drawSprites();
}

function bounceOff(apple,kiwi){
  if (apple.x - kiwi.x < kiwi.width/2 + apple.width/2
    && kiwi.x - apple.x < kiwi.width/2 + apple.width/2) {
      apple.velocityX = apple.velocityX * (-1);
      kiwi.velocityX = kiwi.velocityX * (-1);
  }
  if (apple.y - kiwi.y < kiwi.height/2 + apple.height/2
    && kiwi.y - apple.y < kiwi.height/2 + apple.height/2){
      apple.velocityY = apple.velocityY * (-1);
    kiwi.velocityY = kiwi.velocityY * (-1);
  }
}