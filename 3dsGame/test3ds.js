function gameLoop() {
    const gp = navigator.getGamepads()[0];
  
    if (gp.buttons[0].value > 0 || gp.buttons[0].pressed) {
      b--;
    } else if (gp.buttons[1].value > 0 || gp.buttons[1].pressed) {
      a++;
    } else if (gp.buttons[2].value > 0 || gp.buttons[2].pressed) {
      b++;
    } else if (gp.buttons[3].value > 0 || gp.buttons[3].pressed) {
      a--;
    }
  
    ball.style.left = `${a * 2}px`; // ball is a UI widget
    ball.style.top = `${b * 2}px`;
  
    requestAnimationFrame(gameLoop);
  }  