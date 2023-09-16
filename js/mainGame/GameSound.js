// KP: this is where we can replace with AI-generated sounds for each of the sounds that play when the player interacts with a game element.
// KP: for example the var coin is the one that we hear when user jumps to hit a coin blob.

function GameSound() {
  var coin;
  var powerUpAppear;
  var powerUp;
  var marioDie;
  var killEnemy;
  var stageClear;
  var bullet;
  var powerDown;
  var jump;

  var that = this;

  // KP: we can just replace coin.wav from AI generated music model
  this.init = function() {
    coin = new Audio('sounds/coin.wav');
    powerUpAppear = new Audio('sounds/power-up-appear.wav');
    powerUp = new Audio('sounds/power-up.wav');
    marioDie = new Audio('sounds/mario-die.wav');
    killEnemy = new Audio('sounds/kill-enemy.wav');
    stageClear = new Audio('sounds/stage-clear.wav');
    bullet = new Audio('sounds/bullet.wav');
    powerDown = new Audio('sounds/power-down.wav');
    jump = new Audio('sounds/jump.wav');
  };

  // KP: we don't need to change this as this is just playing logic, unless we want to get creative with the playspeed or something like that later
  this.play = function(element) {
    if (element == 'coin') {
      coin.pause();
      coin.currentTime = 0;
      coin.play();
    } else if (element == 'powerUpAppear') {
      powerUpAppear.pause();
      powerUpAppear.currentTime = 0;
      powerUpAppear.play();
    } else if (element == 'powerUp') {
      powerUp.pause();
      powerUp.currentTime = 0;
      powerUp.play();
    } else if (element == 'marioDie') {
      marioDie.pause();
      marioDie.currentTime = 0;
      marioDie.play();
    } else if (element == 'killEnemy') {
      killEnemy.pause();
      killEnemy.currentTime = 0;
      killEnemy.play();
    } else if (element == 'stageClear') {
      stageClear.pause();
      stageClear.currentTime = 0;
      stageClear.play();
    } else if (element == 'bullet') {
      bullet.pause();
      bullet.currentTime = 0;
      bullet.play();
    } else if (element == 'powerDown') {
      powerDown.pause();
      powerDown.currentTime = 0;
      powerDown.play();
    } else if (element == 'jump') {
      jump.pause();
      jump.currentTime = 0;
      jump.play();
    }
  };
}
