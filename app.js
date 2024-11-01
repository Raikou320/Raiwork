class App {
  constructor(config) {
    this.configPhysics = config.physics;
    this.gravityY = config.physics.gravity.y;
    this.gravityX = config.physics.gravity.x;
  }
  physics() {
    gravity = {
      x: this.gravityX,
      y: this.gravityY,
    };
  }
}
