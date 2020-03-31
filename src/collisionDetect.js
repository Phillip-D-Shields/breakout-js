function detectCollision(ball, gameObject) {
  // check collision with paddle
  let bottomOfBall = ball.position.y + ball.size;
  let topOfBall = ball.position.y;

  let topOfObject = gameObject.position.y;
  let leftSideofObject = gameObject.position.x;
  let rightSideofObject = gameObject.position.x + gameObject.width;
  let bottomofObject = gameObject.position.y + gameObject.height;

  // if statement to enforce collision detection
  if (
    bottomOfBall >= topOfObject &&
    topOfBall <= bottomofObject &&
    ball.position.x >= leftSideofObject &&
    ball.position.x + ball.size <= rightSideofObject
  ) {
    return true;
  } else {
    return false;
  }
}
