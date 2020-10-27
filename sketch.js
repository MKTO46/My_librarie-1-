function setup() {
  createCanvas(800,400);
  fixedrect = createSprite(200, 200, 50, 50);
  movingrect = createSprite(300, 200, 80, 50);
  Square = createSprite(400,300,40,30)
}

function draw() {
  background('purple');  
  movingrect.x = mouseX
  movingrect.y = mouseY
  if(isTouching(Square,movingrect)){
    Square.shapeColor = 'pink'
    movingrect.shapeColor = 'pink'
  }else{
    Square.shapeColor = 'white'
    movingrect.shapeColor = 'white'
  }
  drawSprites();
}
