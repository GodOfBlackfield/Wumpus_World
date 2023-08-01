export class game {
  constructor() {
    this.mineNo = 9;
    this.wNo = 1;
    this.gameBoard = [
      ['P', '.', '.', '.', '.'],
      ['.', '.', '.', '.', '.'],
      ['.', '.', '.', '.', '.'],
      ['.', '.', '.', '.', '.'],
      ['.', '.', '.', '.', '.'],
    ];
    this.playerPos = [0, 0];
    this.wPos = [0, 0];
    this.dir = 'R';
    this.vis = new Map();
    this.mines = new Map();
    this.wKilled = false;
  }

  rand(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }

  init() {
    let pos = new Map();
    for (let i = 0; i < 5; i++) {
      for (let j = 0; j < 5; j++) {
        pos.set(`${i}-${j}`, [i, j]);
        this.vis.set(`${i}-${j}`, false);
      }
    }
    pos.delete('0-0');
    this.vis.set('0-0', true);
    this.goldPos = [this.rand(1, 4), this.rand(1, 4)];
    pos.delete(`${this.goldPos[0]}-${this.goldPos[1]}`);
    this.gameBoard[this.goldPos[0]][this.goldPos[1]] = 'G';
    const freePos = this.rand(1, 5);
    switch (freePos) {
      case 1:
        this.gameBoard[this.goldPos[0]][this.goldPos[1] + 1] = 'M';
        this.gameBoard[this.goldPos[0] + 1][this.goldPos[1]] = 'M';
        this.gameBoard[this.goldPos[0]][this.goldPos[1] - 1] = 'M';
        pos.delete(`${this.goldPos[0]}-${this.goldPos[1] + 1}`);
        pos.delete(`${this.goldPos[0] + 1}-${this.goldPos[1]}`);
        pos.delete(`${this.goldPos[0]}-${this.goldPos[1] - 1}`);
        this.mines.set(`${this.goldPos[0]}-${this.goldPos[1] + 1}`, 0);
        this.mines.set(`${this.goldPos[0]}-${this.goldPos[1] - 1}`, 0);
        this.mines.set(`${this.goldPos[0] + 1}-${this.goldPos[1]}`, 0);
        break;
      case 2:
        this.gameBoard[this.goldPos[0] + 1][this.goldPos[1]] = 'M';
        this.gameBoard[this.goldPos[0] - 1][this.goldPos[1]] = 'M';
        this.gameBoard[this.goldPos[0]][this.goldPos[1] + 1] = 'M';
        pos.delete(`${this.goldPos[0]}-${this.goldPos[1] + 1}`);
        pos.delete(`${this.goldPos[0] - 1}-${this.goldPos[1]}`);
        pos.delete(`${this.goldPos[0] + 1}-${this.goldPos[1]}`);
        this.mines.set(`${this.goldPos[0]}-${this.goldPos[1] + 1}`, 0);
        this.mines.set(`${this.goldPos[0] - 1}-${this.goldPos[1]}`, 0);
        this.mines.set(`${this.goldPos[0] + 1}-${this.goldPos[1]}`, 0);
        break;
      case 3:
        this.gameBoard[this.goldPos[0]][this.goldPos[1] + 1] = 'M';
        this.gameBoard[this.goldPos[0] - 1][this.goldPos[1]] = 'M';
        this.gameBoard[this.goldPos[0]][this.goldPos[1] - 1] = 'M';
        pos.delete(`${this.goldPos[0]}-${this.goldPos[1] + 1}`);
        pos.delete(`${this.goldPos[0]}-${this.goldPos[1] - 1}`);
        pos.delete(`${this.goldPos[0] - 1}-${this.goldPos[1]}`);
        this.mines.set(`${this.goldPos[0]}-${this.goldPos[1] + 1}`, 0);
        this.mines.set(`${this.goldPos[0]}-${this.goldPos[1] - 1}`, 0);
        this.mines.set(`${this.goldPos[0] - 1}-${this.goldPos[1]}`, 0);
        break;
      case 4:
        this.gameBoard[this.goldPos[0] + 1][this.goldPos[1]] = 'M';
        this.gameBoard[this.goldPos[0] - 1][this.goldPos[1]] = 'M';
        this.gameBoard[this.goldPos[0]][this.goldPos[1] - 1] = 'M';
        pos.delete(`${this.goldPos[0]}-${this.goldPos[1] - 1}`);
        pos.delete(`${this.goldPos[0] - 1}-${this.goldPos[1]}`);
        pos.delete(`${this.goldPos[0] + 1}-${this.goldPos[1]}`);
        this.mines.set(`${this.goldPos[0]}-${this.goldPos[1] - 1}`, 0);
        this.mines.set(`${this.goldPos[0] - 1}-${this.goldPos[1]}`, 0);
        this.mines.set(`${this.goldPos[0] + 1}-${this.goldPos[1]}`, 0);
        break;
    }
    this.mineNo -= 3;
    pos.forEach((v, k, m) => {
      if (this.mineNo > 0) {
        const b = this.rand(0, 2);
        if (b === 1) {
          this.gameBoard[v[0]][v[1]] = 'M';
          m.delete(k);
          this.mines.set(k, v);
          this.mineNo--;
        }
      }
    });
    pos.forEach((v, k, m) => {
      if (this.wNo > 0) {
        const b = this.rand(0, 2);
        if (b === 1) {
          this.gameBoard[v[0]][v[1]] = 'W';
          m.delete(k);
          this.wPos = v;
          this.wNo--;
        }
      }
    });
  }

  moveLeft() {
    if (this.dir !== 'L') {
      this.dir = 'L';
    } else if (this.playerPos[0] > 0) {
      this.playerPos[0]--;
      this.vis.set(`${this.playerPos[0]}-${this.playerPos[1]}`, true);
    }
  }

  moveRight() {
    if (this.dir !== 'R') {
      this.dir = 'R';
    } else if (this.playerPos[0] < 4) {
      this.playerPos[0]++;
      this.vis.set(`${this.playerPos[0]}-${this.playerPos[1]}`, true);
    }
  }

  moveUp() {
    if (this.dir !== 'U') {
      this.dir = 'U';
    } else if (this.playerPos[1] < 4) {
      this.playerPos[1]++;
      this.vis.set(`${this.playerPos[0]}-${this.playerPos[1]}`, true);
    }
  }

  moveDown() {
    if (this.dir !== 'D') {
      this.dir = 'D';
    } else if (this.playerPos[1] > 0) {
      this.playerPos[1]--;
      this.vis.set(`${this.playerPos[0]}-${this.playerPos[1]}`, true);
    }
  }

  checkAttack() {
    switch (this.dir) {
      case 'L':
        return (
          this.playerPos[1] === this.wPos[1] && this.playerPos[0] > this.wPos[0]
        );
      case 'R':
        return (
          this.playerPos[1] === this.wPos[1] && this.playerPos[0] < this.wPos[0]
        );
      case 'U':
        return (
          this.playerPos[0] === this.wPos[0] && this.playerPos[1] < this.wPos[1]
        );
      case 'D':
        return (
          this.playerPos[0] === this.wPos[0] && this.playerPos[1] > this.wPos[1]
        );
      default:
        break;
    }
  }

  check() {
    if (
      this.playerPos[0] === this.goldPos[0] &&
      this.playerPos[1] === this.goldPos[1]
    ) {
      return 'W';
    } else if (
      this.playerPos[0] === this.wPos[0] &&
      this.playerPos[1] === this.wPos[1] &&
      !this.wKilled
    ) {
      return 'LW';
    } else if (this.mines.has(`${this.playerPos[0]}-${this.playerPos[1]}`)) {
      return 'LM';
    } else {
      return 'N';
    }
  }
}
