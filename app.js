class App {
  constructor(config) {
    this.physicsSprites = [];
    this.gravity = config.gravity;

    this.add = {
      sprite: (width, height, x, y, color) => {
        const div = document.createElement('div');
        div.style.width = `${width}px`;
        div.style.height = `${height}px`;
        div.style.position = 'absolute';
        div.style.left = `${x}px`;
        div.style.bottom = `${y}px`;
        div.style.backgroundColor = color;
        document.body.appendChild(div);
        div.x = x;
        div.y = y;
        div.width = width;
        return div;
      },
    };

    this.physics = {
      add: {
        sprite: (width, height, x, y, color) => {
          const div = this.add.sprite(width, height, x, y, color);
          this.physicsSprites.push(div);
          console.log(this.physicsSprites)
        },
      },
    }
    this.start();
  }
  start() {
    const animate = () => {
      this.update();
      requestAnimationFrame(animate);
    };
    animate();
  }
  update() {
    this.physicsSprites.forEach((sprite) => {
      if (sprite.x + sprite.width > window.innerWidth) {
        sprite.x = window.innerWidth - sprite.width;
      }
      sprite.x += this.gravity.x / 10;
      sprite.y -= this.gravity.y / 10;
      sprite.style.left = `${sprite.x}px`;
      sprite.style.bottom = `${sprite.y}px`;
    });
  }
}
