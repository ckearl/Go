// hooks/useGameState.js

import {useState, useEffect} from 'react';
import {Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');

const useGameState = (pieceSize, boardSize) => {
  const initialPiecesState = () => {
    const initialPieces = [];
    const pileRadius = pieceSize * 1.5;

    for (let i = 0; i < 82; i++) {
      const isBlack = i % 2 === 0;
      const color = isBlack ? 'black' : 'white';

      // Center of the pile
      const pileCenterX = isBlack ? width * 0.75 : width * 0.25;
      const pileCenterY = height - boardSize * 0.35;

      // Random angle and distance within the pile
      const angle = Math.random() * 2 * Math.PI;
      const distance = Math.sqrt(Math.random()) * pileRadius;

      // Calculate the position within the pile
      const x = pileCenterX + distance * Math.cos(angle);
      const y = pileCenterY + distance * Math.sin(angle);

      initialPieces.push({
        id: `piece-${color}-${i + 1}`,
        color: color,
        x: x,
        y: y,
      });
    }
    return initialPieces;
  };

  const [pieces, setPieces] = useState(initialPiecesState);
  const [boardState, setBoardState] = useState(
    Array(9)
      .fill()
      .map(() => Array(9).fill('o')),
  );

  useEffect(() => {
    console.log(
      `Board state:\n${boardState
        .map(row => row.join(' ').slice(1))
        .join('\n')}`,
    );
  }, [boardState]);

  const resetGame = () => {
    setPieces(initialPiecesState);
    setBoardState(
      Array(9)
        .fill()
        .map(() => Array(9).fill('o')),
    );
  };

  return {pieces, setPieces, boardState, setBoardState, resetGame};
};

export default useGameState;
