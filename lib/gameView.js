var GameView = function (game, ctx) {
  this.ctx = ctx;
  this.game = game;
  this.cat = this.game.addCat();
};

GameView.MOVES = {
  "w": [ 0, -1],
  "a": [-1,  0],
  "s": [ 0,  1],
  "d": [ 1,  0],
};

GameView.prototype.bindKeyHandlers = function () {
  const cat = this.cat;

  Object.keys(GameView.MOVES).forEach(function (k) {
    const move = GameView.MOVES[k];
    key(k, function () { cat.power(move); });
  });
};

GameView.prototype.start = function () {
  this.bindKeyHandlers();
  this.lastTime = 0;
  //start the animation
  requestAnimationFrame(this.animate.bind(this));
};

GameView.prototype.animate = function(time){
  var timeDelta = time - this.lastTime;

  this.game.step(timeDelta);
  this.game.draw(this.ctx);
  this.lastTime = time;

  //every call to animate requests causes another call to animate
  requestAnimationFrame(this.animate.bind(this));
};

module.exports = GameView;
