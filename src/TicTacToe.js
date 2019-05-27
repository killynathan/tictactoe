const EMPTY = 0;
const PLAYER = 1;
const COMPUTER = 2;
const TIE = 3;

class TicTacToe {
  constructor(
    initialBoardState = [
      [EMPTY, EMPTY, EMPTY],
      [EMPTY, EMPTY, EMPTY],
      [EMPTY, EMPTY, EMPTY]
    ]
  ) {
    this.board = initialBoardState;
  }

  playerMove(x, y) {
    if (this.getWinnerHelper() !== EMPTY || this.board[x][y] !== EMPTY) {
      return new TicTacToe(Array.from(this.board));
    }
    this.board[x][y] = PLAYER;
    if (this.getWinnerHelper() !== PLAYER) {
      this.ai();
    }
    return new TicTacToe(Array.from(this.board));
  }

  getBoardState() {
    const converter = code => {
      if (code === EMPTY) return "";
      if (code === PLAYER) return "X";
      return "O";
    };
    return this.board.map(row => row.map(col => converter(col)));
  }

  getWinner() {
    return this.convertToReadable(this.getWinnerHelper());
  }

  getWinnerHelper() {
    // check vertical
    let winner = this._checkVertical();
    if (winner !== EMPTY) return winner;
    // check horizontal
    winner = this._checkHorizontal();
    if (winner !== EMPTY) return winner;
    // check diagonal
    winner = this._checkDiagonal();
    if (winner !== EMPTY) return winner;
    if (!this.board.some(row => row.some(col => col === EMPTY))) return TIE;
    return EMPTY;
  }

  reset() {
    return new TicTacToe([
      [EMPTY, EMPTY, EMPTY],
      [EMPTY, EMPTY, EMPTY],
      [EMPTY, EMPTY, EMPTY]
    ]);
  }

  _checkVertical() {
    for (let row of this.board) {
      if (row[0] === row[1] && row[0] === row[2] && row[0] !== EMPTY) {
        return row[0];
      }
    }
    return EMPTY;
  }

  _checkHorizontal() {
    for (let i = 0; i < 3; i++) {
      if (
        this.board[0][i] === this.board[1][i] &&
        this.board[0][i] === this.board[2][i] &&
        this.board[0][i] !== EMPTY
      ) {
        return this.board[0][i];
      }
    }
    return EMPTY;
  }

  _checkDiagonal() {
    if (
      this.board[1][1] !== EMPTY &&
      ((this.board[0][2] === this.board[1][1] &&
        this.board[0][2] === this.board[2][0]) ||
        (this.board[0][0] === this.board[1][1] &&
          this.board[0][0] === this.board[2][2]))
    ) {
      return this.board[1][1];
    }
    return EMPTY;
  }

  ai() {
    for (let x = 0; x < 3; x++) {
      for (let y = 0; y < 3; y++) {
        if (this.board[x][y] === EMPTY) {
          this.board[x][y] = COMPUTER;
          return;
        }
      }
    }
  }

  convertToReadable(code) {
    if (code === EMPTY) return "";
    if (code === PLAYER) return "Player";
    if (code === TIE) return "Tie";
    return "Computer";
  }
}

export default TicTacToe;
