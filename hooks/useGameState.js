// hooks/useGameState.js

import {useState, useCallback, useEffect} from 'react';
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
      .map(() => Array(boardDimension).fill('-')),
  );

  const checkForLiberties = useCallback(
    currentBoardState => {
      const liberties = {
        black: [],
        white: [],
        both: [],
      };
      for (let i = 0; i < boardDimension; i++) {
        for (let j = 0; j < boardDimension; j++) {
          if (currentBoardState[i][j] === '-') {
            const adjacentPieces = [
              [i - 1, j],
              [i + 1, j],
              [i, j - 1],
              [i, j + 1],
            ];
            adjacentPieces.forEach(([x, y]) => {
              if (
                x >= 0 &&
                x < boardDimension &&
                y >= 0 &&
                y < boardDimension
              ) {
                const adjacentPiece = currentBoardState[x][y];
                if (adjacentPiece === 'B') {
                  liberties.black.push([i, j]);
                } else if (adjacentPiece === 'W') {
                  liberties.white.push([i, j]);
                }
              }
            });
          }
        }
      }

      // Check for intersections with both black and white liberties
      liberties.black.forEach(blackLiberty => {
        liberties.white.forEach(whiteLiberty => {
          if (
            blackLiberty[0] === whiteLiberty[0] &&
            blackLiberty[1] === whiteLiberty[1]
          ) {
            liberties.both.push(blackLiberty);
          }
        });
      });

      return liberties;
    },
    [boardDimension],
  );

  const updateBoardState = useCallback(
    newBoardState => {
      const liberties = checkForLiberties(newBoardState);

      // apply black liberties
      liberties.black.forEach(([i, j]) => {
        if (newBoardState[i][j] === '-') {
          newBoardState[i][j] = 'b';
        }
      });
      
      // apply white liberties
      liberties.white.forEach(([i, j]) => {
        if (newBoardState[i][j] === '-') {
          newBoardState[i][j] = 'w';
        }
      });

      // apply cases for both
      liberties.both.forEach(([i, j]) => {
        if (newBoardState[i][j] === '-') {
          newBoardState[i][j] = 's';
        }
      });

      // check for captured pieces and update the board state
      const piecesToRemoveCoords = piecesToRemove(newBoardState);
      piecesToRemoveCoords.forEach(([i, j]) => {
        newBoardState[i][j] = '-';
      });

      setBoardState([...newBoardState]);

      console.log(
        `Board state:\n${newBoardState
          .map(row => row.join(' ').slice(0))
          .join('\n')}`,
      );
    },
    [checkForLiberties, piecesToRemove],
  );

  // if any grouping of the same color of pieces is surrounded by the other color, meaning that group has no liberties. this is a function to return an array of the coordinates of the pieces that have no liberties
  const piecesToRemove = useCallback(
    currentBoardState => {
      const piecesToRemoveCoords = [];
      const boardStateCopy = currentBoardState.map(row => [...row]);

      for (let i = 0; i < boardDimension; i++) {
        for (let j = 0; j < boardDimension; j++) {
          if (boardStateCopy[i][j] === 'B' || boardStateCopy[i][j] === 'W') {
            const color = boardStateCopy[i][j];
            const piecesGroup = [];
            const stack = [[i, j]];
            let hasLiberty = false;

            while (stack.length > 0) {
              const [x, y] = stack.pop();
              if (
                x >= 0 &&
                x < boardDimension &&
                y >= 0 &&
                y < boardDimension &&
                (boardStateCopy[x][y] === color ||
                  boardStateCopy[x][y] === '-' ||
                  boardStateCopy[x][y] === 'b' ||
                  boardStateCopy[x][y] === 'w' ||
                  boardStateCopy[x][y] === 's')
              ) {
                if (
                  boardStateCopy[x][y] === '-' ||
                  boardStateCopy[x][y] === 'b' ||
                  boardStateCopy[x][y] === 'w' ||
                  boardStateCopy[x][y] === 's'
                ) {
                  hasLiberty = true;
                } else {
                  piecesGroup.push([x, y]);
                  boardStateCopy[x][y] = 'x';
                  stack.push([x - 1, y]);
                  stack.push([x + 1, y]);
                  stack.push([x, y - 1]);
                  stack.push([x, y + 1]);
                }
              }
            }

            if (!hasLiberty) {
              piecesToRemoveCoords.push(...piecesGroup);
            }
          }
        }
      }

      return piecesToRemoveCoords;
    },
    [boardDimension],
  );

  const resetGame = () => {
    setPieces(initialPiecesState());
    const initialBoardState = Array(boardDimension)
      .fill()
      .map(() => Array(boardDimension).fill('-'));
    updateBoardState(initialBoardState);
  };

  return {
    pieces,
    setPieces,
    boardState,
    updateBoardState,
    resetGame,
  };
};

export default useGameState;
