import React from 'react';
import Piece from './Piece';
import '../css/GameBoard.css';

const GameBoard = ({ board, onPieceClick }) => {
  return (
    <div className="game-board">
      {board.map((row, rowIndex) => (
        <div key={rowIndex} className="row">
          {row.map((piece, colIndex) => (
            <Piece
              key={colIndex}
              piece={piece}
              onClick={() => onPieceClick(rowIndex, colIndex)}
              isFalling={piece === null} // ここで落ちてくるピースにアニメーションを適用
            />
          ))}
        </div>
      ))}
    </div>
  );
};

export default GameBoard;
