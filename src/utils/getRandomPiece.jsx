// src/utils/getRandomPiece.jsx
const colors = ['red', 'green', 'blue'];

const getRandomPiece = () => {
  return { type: colors[Math.floor(Math.random() * colors.length)] };
};

export default getRandomPiece;
