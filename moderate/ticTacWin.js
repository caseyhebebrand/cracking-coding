// Design an algorithm to determine if someone has won a game of Tic, Tac, Toe.
const isRow = (board, move) => {
  let len = board[move[0]].length;
  let count = {};
  for (let i = 0; i < len; i++) {
    let mark = boardl[move[0]][i];
    if (!mark) {
      return false;
    }
    count[mark] ? count[mark]++ : count[mark] = 1;
  }
  return (count['X'] === len) || (count['O'] === len);
}

const isColumn = (board, move) => {
  let len = board.length;
  let count = {};
  for (let i = 0; i < len; i++) {
    let mark = board[i][move[1]];
    if (!mark) {
      return false;
    }
    count[mark] ? count[mark]++ : count[mark] = 1;
  }
}

const isDiagonal = (board, move) => {
  let count1 = {};
  let count2 = {};
  for (let i = 0; i < board.length; i++) {
    let mark = board[i][i];
    count1[mark] ? count1[mark]++ : count1[mark] = 1;
  }

  for (let j = 0; j < board.length; j++) {
    let mark = board[i][board.length - 1 - i];
    count2[mark] ? count2[mark]++ : count2[mark] = 1;
  }

  return (count1['X'] === board.length) || (count1['O'] === board.length) || (count2['X'] === board.length) || (count2['O'] === board.length);
}

const ticTacWin = (board, move) => {
  return isRow(board, move) || isColumn(board, move) || isDiagonal(board, move);
}
