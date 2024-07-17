// hooks/usePieceMovement.js

const usePieceMovement = (
  pieces,
  setPieces,
  boardState,
  setBoardState,
  cellSize,
  boardOffset,
) => {
  const updatePiecePosition = (id, x, y) => {
    setPieces(prevPieces =>
      prevPieces.map(piece => (piece.id === id ? {...piece, x, y} : piece)),
    );

    // Check if the piece is on the board
    const boardX = Math.round((x - boardOffset.x) / cellSize);
    const boardY = Math.round((y - boardOffset.y) / cellSize);

    if (boardX >= 0 && boardX < 9 && boardY >= 0 && boardY < 9) {
      setBoardState(prevState => {
        const newState = prevState.map(row => [...row]);
        const piece = pieces.find(p => p.id === id);
        newState[boardY][boardX] = piece.color === 'black' ? 'b' : 'w';
        return newState;
      });
    }
  };

  return {updatePiecePosition};
};

export default usePieceMovement;
