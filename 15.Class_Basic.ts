const display: HTMLDivElement = document.getElementById(
  "root"
) as HTMLDivElement;

class Rectangle {
  public length: number = 0;
  public width: number = 0;

  setProperty(len: number, wid: number) {
    this.length = len;
    this.width = wid;
  }

  constructor(len: number, wid: number) {
    this.length = len;
    this.width = wid;
  }

  displayProperty() {
    display.innerHTML += `Length = ${this.length}`;
    display.innerHTML += `<br><br>`;
    display.innerHTML += `Width = ${this.width}`;
    display.innerHTML += `<br><br>`;
  }
}

const r1 = new Rectangle(0, 0);
r1.setProperty(6, 9);
r1.displayProperty();

const r2 = new Rectangle(5, 4);
r2.displayProperty();
