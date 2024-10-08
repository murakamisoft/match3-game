const checkForMatches = (board) => {
  const matches = [];
  const rows = board.length;
  const cols = board[0].length;

  // 水平チェック
  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols - 2; col++) {
      if (board[row][col] && board[row][col].type === board[row][col + 1].type && board[row][col].type === board[row][col + 2].type) {
        matches.push({ row, col });
        matches.push({ row, col: col + 1 });
        matches.push({ row, col: col + 2 });
      }
    }
  }

  // 垂直チェック
  for (let col = 0; col < cols; col++) {
    for (let row = 0; row < rows - 2; row++) {
      if (board[row][col] && board[row][col].type === board[row + 1][col].type && board[row][col].type === board[row + 2][col].type) {
        matches.push({ row, col });
        matches.push({ row: row + 1, col });
        matches.push({ row: row + 2, col });
      }
    }
  }

  return matches;
};


export default checkForMatches;
