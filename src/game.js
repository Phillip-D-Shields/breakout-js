class Game {
  constructor(gameWidth, gameHeight) {
    this.gameWidth = gameWidth;
    this.gameHeight = gameHeight;
  }

  start() {
    this.paddle = new Paddle(this);
    this.ball = new Ball(this);

    let brick = new Brick(this, {x: 20, y: 20});

    this.gameObjects = [
      this.ball,
      this.paddle,
      brick
    ];

    new InputHandler(this.paddle);
  }

  update(deltaTime) { 
    this.gameObjects.forEach(object => object.update(deltaTime));
  }

  draw(ctx) {
    this.gameObjects.forEach(object => object.draw(ctx));
  }
}
