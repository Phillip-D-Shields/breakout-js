class InputHandler {
  constructor(paddle, game) {
    // // QUICK WAY TO FIND KEYCODES BELOW
    // document.addEventListener('keydown', event => {
    //     console.log(event.keyCode);
    // })
    document.addEventListener("keydown", e => {
      switch (e.keyCode) {
        case 37:
          paddle.moveLeft();
          break;
        case 39:
          paddle.moveRight();
          break;
      }
    });
    document.addEventListener("keyup", e => {
      switch (e.keyCode) {
        case 37:
          if (paddle.speed < 0) {
            paddle.stop();
          }
          break;
        case 39:
          if (paddle.speed > 0) {
            paddle.stop();
          }
          break;
        case 27:
          game.togglePause();
          break;
        case 32: 
          game.start();
          break;
      }
    });
  }
}
