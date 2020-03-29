class Ball {
  constructor(game) {
    this.image = document.getElementById("imgBall");

    this.gameWidth = game.gameWidth;
    this.gameHeight = game.gameHeight;

    this.game = game;

    this.position = { x: 10, y: 10 };
    this.speed = { x: 2, y: 2 };
    this.size = 16;
  }

  draw(ctx) {
    ctx.drawImage(
      this.image,
      this.position.x,
      this.position.y,
      this.size,
      this.size
    );
  }

  update(deltaTime) {

    this.position.x += this.speed.x;
    this.position.y += this.speed.y;

    // reverse the ball if it reaches the border
    // x axis walls
    if (this.position.x + this.size > this.gameWidth || this.position.x < 0) {
      this.speed.x = -this.speed.x;
    }
    // y axis walls
    if (this.position.y + this.size > this.gameHeight || this.position.y < 0) {
      this.speed.y = -this.speed.y;
    }

    // check collision with paddle
    let bottomOfBall = this.position.y + this.size;
    let topOfPaddle = this.game.paddle.position.y;
    let leftSideofPaddle = this.game.paddle.position.x;
    let rightSideofPAddle =
      this.game.paddle.position.x + this.game.paddle.width;

    // if statement to make sure ball only bounces off paddle
    if (
      bottomOfBall >= topOfPaddle &&
      this.position.x >= leftSideofPaddle &&
      this.position.x + this.size <= rightSideofPAddle
    ) {
      this.speed.y = -this.speed.y;
      this.position.y = this.game.paddle.position.y - this.size;
    }
  }
}
