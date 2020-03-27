import { Paddle } from '../src/paddle'

export default class InputHandler {
  constructor(paddle) {
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
  }
}
