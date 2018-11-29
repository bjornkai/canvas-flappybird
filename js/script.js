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
  this.image = `images/flappy.png`
}


let currentGame;
let currentFlappy;


function startGame(){
  currentGame = new Game();
  currentFlappy = new Flappy();
  currentGame.flappy = currentFlappy;
}

startGame();