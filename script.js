function Player(playerName) {
  this.playerName = playerName;
  this.lvl = 1;
  this.points = 0;
}

Player.prototype.gainXp = function (x) {
  this.points += x;
  if (this.points > 10) {
    this.lvl += 1;
    this.points -= 10;
  }
};
Player.prototype.describr = function () {
  console.log(this.playerName, this.lvl);
  return '';
};

const player1 = new Player('deepti');

player1.gainXp(5);
player1.gainXp(8);
console.log(player1.describr());
