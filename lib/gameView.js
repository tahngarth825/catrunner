const Cat = require("./cat.js");
const Constants = require("./constants.js");
const GameVariables = require("./gameVariables.js");

const GameView = function (game, ctx) {
  this.ctx = ctx;
  this.game = game;
  this.over = false;
  this.won = false;
};

GameView.MOVES = {
  "w": [ 0, -50],
  "a": [-50,  0],
  "s": [ 0,  50],
  "d": [ 50,  0],
};

GameView.prototype.bindKeyHandlers = function () {
  const cat = this.game.cat;

  Object.keys(GameView.MOVES).forEach(function (k) {
    const move = GameView.MOVES[k];
    key(k, function () { cat.trot(move); }); //keymaster
  });
};

GameView.prototype.checkWin = function () {
  if (this.game.cat.pos[0] === Constants.REWARD_POS[0] &&
  this.game.cat.pos[1] === Constants.REWARD_POS[1]){
    if (this.game.level < Constants.MAX_LVL){
      this.renderReward();
    } else {
      this.over = true;
      this.won = true;
    }
  }
};

GameView.prototype.renderReward = function () {
  alert(`Pusheen has found ${Constants.REWARD[this.game.level-1]}! Nom nom nom!`);
  this.game.level += 1;
  this.game.resetCars();
  this.game.cat.restart();

  GameVariables.level.innerHTML = `${this.game.level}`;
};

GameView.prototype.triggerWin = function () {
  let winImg = new Image();
  winImg.src = Constants.WIN_URL;

  const that = this;

  window.clearInterval(GameVariables.timer);

  if (GameVariables.sec < GameVariables.bestTime){
    GameVariables.bestTime = GameVariables.sec;
    GameVariables.bestTimeDiv.innerHTML = GameVariables.bestTime;
  }

  winImg.addEventListener("load", function() {
    that.ctx.drawImage(winImg, 100, 100, 235, 252);

    alert("Pusheen has arrived home to his mother! Yay!");
    that.prompt_restart();
  });
};

GameView.prototype.prompt_restart = function () {
  if (confirm("Play again?") === true){
    this.game.level = 1;
    this.game.resetCars();
    this.game.cat.restart();
    this.over = false;
    this.won = false;
  } else {
    this.over = true;
  }
};

GameView.prototype.gameOver = function () {
  alert("Pusheen got run over! :(");
  GameVariables.sec = 0;
  this.over = true;
  this.prompt_restart();
};

GameView.prototype.start = function () {
  this.bindKeyHandlers();
  this.lastTime = 0;
  //start the animation
  requestAnimationFrame(this.animate.bind(this));

  GameVariables.level.innerHTML = `${this.game.level}`;

  //TODO SET UP RESTART LOGIC HERE; possibly setup a callback for winning
};

GameView.prototype.animate = function(time){
  const timeDelta = time - this.lastTime;
  const that = this;

  this.game.step(timeDelta, this.gameOver.bind(this));
  this.game.draw(this.ctx);
  //ensure he sits on his reward first!
  window.setTimeout(this.checkWin.bind(this), 100);
  this.lastTime = time;
  //every call to animate requests causes another call to animate
  if (that.over === false) {
    requestAnimationFrame(that.animate.bind(that));
  } else if (that.won === true) {
    that.triggerWin();
  }
};


module.exports = GameView;
