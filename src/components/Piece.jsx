import React from 'react';
import '../css/Piece.css';

const Piece = ({ piece, onClick, isFalling }) => {
  return (
    <div
      className={`piece ${piece.type} ${isFalling ? 'falling' : ''}`}
      onClick={onClick}
    >
      {/* クリックイベント */}
    </div>
  );
};

export default Piece;
