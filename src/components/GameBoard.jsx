import React from 'react';
import Piece from './Piece';
import '../css/GameBoard.css';

const GameBoard = ({ board, onPieceClick }) => {
  return (
    <div className="GameBoard">
      {board.map((row, rowIndex) => (
        <div className="GameBoard-row" key={rowIndex}>
          {row.map((piece, colIndex) => (
            <Piece
              key={`${rowIndex}-${colIndex}`}
              piece={piece}
              onClick={() => onPieceClick(rowIndex, colIndex)}
            />
          ))}
        </div>
      ))}
    </div>
  );
};

export default GameBoard;
