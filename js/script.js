const myCanvas = document.querySelector(".my-flappy");
const ctx = myCanvas.getContext("2d");

// GAME CONSTRUCTOR FUNCTION
const Game = function(){
  this.flappy = {};
  this.obstacles = [];
}

// FLAPPYBIRD CONSTRUCTOR FUNCTION:
const Flappy = function(){
  this.x = 0;
  this.y = 220;
  this.width = 100;
  this.height = 100;
  this.image = `images/flappy.png`;
}

Flappy.prototype.draw = function(){
  console.log(`This :`, this);
  const flappyImg = new Image();
  flappyImg.src = this.image;
  // since we have 2 functional scopes, the keyword "this" will belong to different scopes inside 
  // our way of solving this is reassigning keyword "this" so it refers to the outer scope 

  // let that = this;
  // floppyImg.onload = function(){
    // console.log(that) => that refers to the Flappy object and that's what we need 
    // ctx.drawImage(floppyImg, that.x, that.x, that.width, that.height);
  // }


  // flappyImg.onload = () => {
    // console.log("inner this: ", this)
    ctx.drawImage(flappyImg, this.x, this.y, this.width, this.height);
  // }
}

Flappy.prototype.fly = function (someKeyCode){
  console.log("someKeyCode :", someKeyCode)
  switch(someKeyCode){
    case 37: // left
      this.x -= 10;
      console.log("thisX: ", this.x)
      break;
    case 39: // right
      this.x += 10;
      break;
    case 38: // up
      this.y -= 10;
      break; 
    case 40: // down
      this.y += 10;
      break;
  }
}

function Obstacle (theX, theY, theWidth, theHeight){
    this.x = theX;
    this.y = theY;
    this.width = theWidth;
    this.height = theHeight;
}

Obstacle.prototype.drawObstacle = function(){
  ctx.fillStyle = "green";
  ctx.fillRect(this.x, this.y, this.width, this.height);
}

// function Game (){
// }
let currentGame;
let currentFlappy;


function startGame(){
  currentGame = new Game();
  currentFlappy = new Flappy();
  currentGame.flappy = currentFlappy;
  currentGame.obstacles = [
    new Obstacle(650, 0, 30, 250),
    new Obstacle(800, 350, 30, 200),
    new Obstacle(970, 0, 30, 230),
    new Obstacle(1120, 300, 30, 250),
    new Obstacle(1270, 0, 45, 200)
  ];
  // console.log(currentGame);
  drawingLoop();
}

document.onkeydown = function (event){
  // console.log(event.keyCode);
  currentGame.flappy.fly(event.keyCode);
}

function drawEverything(){
  currentGame.flappy.draw();
  currentGame.obstacles.forEach((oneObstacle) => {
    oneObstacle.drawObstacle();
  });
}

function drawingLoop(){
  ctx.clearRect(0, 0, 1000, 600);
  drawEverything();
  requestAnimationFrame(function(){
    drawingLoop();
  })
}

startGame();