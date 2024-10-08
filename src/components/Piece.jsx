import React from 'react';
import '../css/Piece.css';

const Piece = ({ piece, onClick }) => {
  if (!piece) return <div className="Piece empty"></div>; // nullの場合は空のピースを表示

  return (
    <div className={`Piece ${piece.type}`} onClick={onClick}>
      {/* Additional content can go here */}
    </div>
  );
};

export default Piece;
