function gameLoop() {
    const gp = navigator.getGamepads()[0];
  
    if (gp.buttons[0].value > 0 || gp.buttons[0].pressed) {
      alert("0");
    } else if (gp.buttons[1].value > 0 || gp.buttons[1].pressed) {
      alert("1");
    } else if (gp.buttons[2].value > 0 || gp.buttons[2].pressed) {
      alert("2");
    } else if (gp.buttons[3].value > 0 || gp.buttons[3].pressed) {
      alert("3");
    }
  
    requestAnimationFrame(gameLoop);
  }  