const Game = require("./game");
const GameView = require("./gameView");
const Constants = require("./constants.js");
const GameVariables = require("./gameVariables.js");

document.addEventListener("DOMContentLoaded", function(){
  let canvasEl = document.getElementsByTagName("canvas")[0];
  canvasEl.width = Constants.DIM_X;
  canvasEl.height = Constants.DIM_Y;

  GameVariables.level = document.getElementById("level");
  GameVariables.bestTimeDiv = document.getElementById("best-time");
  GameVariables.bestTimeDiv.innerHTML = `${GameVariables.bestTime} seconds`;

  const ctx = canvasEl.getContext("2d");
  const game = new Game();
  new GameView(game, ctx).start();

  let header = document.getElementById("timer");
  header.innerHTML = `${GameVariables.sec} seconds`;

  GameVariables.timer = window.setInterval(function() {
    GameVariables.sec++;

    header.innerHTML = `${GameVariables.sec} seconds`;
  }, 1000);
});
