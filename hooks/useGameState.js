// hooks/useGameState.js

import {useState, useEffect} from 'react';
import {Dimensions} from 'react-native';
import {
  PILE_VERTICAL_CENTER,
  PILE_RIGHT_POSITION,
  PILE_LEFT_POSITION,
} from '../constants/constants';

const {width, height} = Dimensions.get('window');

const useGameState = (pieceSize, boardSize, boardDimension) => {
  const initialPiecesState = () => {
    const initialPieces = [];
    const pileRadius = pieceSize * 1.5;

    for (let i = 0; i < 82; i++) {
      const isBlack = i % 2 === 0;
      const color = isBlack ? 'black' : 'white';

      // Center of the pile
      const pileCenterX = isBlack
        ? width * PILE_LEFT_POSITION
        : width * PILE_RIGHT_POSITION;
      const pileCenterY = height - boardSize * PILE_VERTICAL_CENTER;

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
    Array(boardDimension)
      .fill()
      .map(() => Array(boardDimension).fill('o')),
  );

  useEffect(() => {
    console.log(
      `Board state:\n${boardState
        .map(row => row.join(' ').slice(0))
        .join('\n')}`,
    );
  }, [boardState]);

  const resetGame = () => {
    setPieces(initialPiecesState);
    setBoardState(
      Array(9)
        .fill()
        .map(() => Array(boardDimension).fill('o')),
    );
  };

  return {pieces, setPieces, boardState, setBoardState, resetGame};
};

export default useGameState;
