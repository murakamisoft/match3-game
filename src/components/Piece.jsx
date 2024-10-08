// src/components/Piece.jsx
import React, { useEffect, useState } from 'react';
import '../css/Piece.css';

const Piece = ({ piece, onClick }) => {
  const [isDisappearing, setIsDisappearing] = useState(false);

  useEffect(() => {
    if (!piece) {
      setIsDisappearing(true);
      // 1秒後に状態をリセット
      const timer = setTimeout(() => setIsDisappearing(false), 500);
      return () => clearTimeout(timer);
    }
  }, [piece]);

  if (!piece) return <div className={`Piece empty ${isDisappearing ? 'disappearing' : ''}`}></div>;

  return (
    <div className={`Piece ${piece.type} ${isDisappearing ? 'disappearing' : ''}`} onClick={onClick}>
      {/* Additional content can go here */}
    </div>
  );
};

export default Piece;
