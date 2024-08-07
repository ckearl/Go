// hooks/usePieceMovement.js

const usePieceMovement = (
  pieces,
  setPieces,
  boardState,
  updateBoardState,
  cellSize,
  boardOffset,
  boardDimension,
) => {
  const updatePiecePosition = (id, x, y) => {
    setPieces(prevPieces =>
      prevPieces.map(piece => (piece.id === id ? {...piece, x, y} : piece)),
    );

    // Check if the piece is on the board
    const boardX = Math.round((x - boardOffset.x) / cellSize);
    const boardY = Math.round((y - boardOffset.y) / cellSize);
    
    if (
      boardX >= 0 &&
      boardX < boardDimension &&
      boardY >= 0 &&
      boardY < boardDimension
    ) {
      const newBoardState = boardState.map(row => [...row]);
      const piece = pieces.find(p => p.id === id);
      newBoardState[boardY][boardX] = piece.color === 'black' ? 'B' : 'W';
      updateBoardState(newBoardState);
    }
  };

  return {updatePiecePosition};
};

export default usePieceMovement;
