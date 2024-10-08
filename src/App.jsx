// src/App.jsx
import React, { useState, useEffect } from 'react';
import GameBoard from './components/GameBoard';
import './css/App.css';
import getRandomPiece from './utils/getRandomPiece';
import checkForMatches from './utils/checkForMatches';

// src/App.jsx
const createInitialBoard = (rows, cols) => {
  const board = Array.from({ length: rows }, () =>
    Array.from({ length: cols }, getRandomPiece)
  );
  return board;
};

const App = () => {
  const [board, setBoard] = useState(createInitialBoard(6, 6));
  const [selectedPiece, setSelectedPiece] = useState(null);

  const handlePieceClick = (rowIndex, colIndex) => {
    if (selectedPiece) {
      // 2つ目のピースがクリックされた場合
      const newBoard = [...board];
      const temp = newBoard[rowIndex][colIndex];
      newBoard[rowIndex][colIndex] = newBoard[selectedPiece.rowIndex][selectedPiece.colIndex];
      newBoard[selectedPiece.rowIndex][selectedPiece.colIndex] = temp;
      setBoard(newBoard);
      setSelectedPiece(null); // 入れ替え後に選択をリセット

      // マッチのチェック
      const matches = checkForMatches(newBoard);
      if (matches.length > 0) {
        const updatedBoard = removeMatchedPieces(newBoard, matches);
        setBoard(updatedBoard);
      }
    } else {
      // 1つ目のピースがクリックされた場合
      setSelectedPiece({ rowIndex, colIndex });
    }
    console.log(`Clicked on piece at row ${rowIndex}, col ${colIndex}`);
  };


  const removeMatchedPieces = (board, matchedPieces) => {
    const newBoard = board.map(row => [...row]); // 新しいボードを作成

    // マッチしたピースを null に置き換え
    matchedPieces.forEach(({ row, col }) => {
      newBoard[row][col] = null; // 消去
    });

    // 各列に対して上から新しいピースを降らせる処理
    for (let col = 0; col < newBoard[0].length; col++) {
      let emptyRow = newBoard.length - 1; // 一番下の行からチェック
      for (let row = newBoard.length - 1; row >= 0; row--) {
        if (newBoard[row][col] !== null) {
          newBoard[emptyRow][col] = newBoard[row][col]; // 移動
          if (emptyRow !== row) {
            newBoard[row][col] = null; // 元の位置を空に
          }
          emptyRow--; // 次に空の位置を上に移動
        }
      }
      // 空になった行には新しいピースを追加
      for (let row = emptyRow; row >= 0; row--) {
        newBoard[row][col] = getRandomPiece(); // 新しいピース
      }
    }

    return newBoard;
  };


  return (
    <div className="App">
      <h1>Match 3 Game</h1>
      <GameBoard board={board} onPieceClick={handlePieceClick} />
    </div>
  );
};

export default App;
