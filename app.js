class App {
  constructor() {
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
      },
    };
  }
}
