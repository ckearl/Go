// Game.js

import React from 'react';
import {View, Dimensions} from 'react-native';
import GameBoard from './components/Board/GameBoard';
import PieceContainer from './components/Piece/PieceContainer';
import GameControls from './components/GameControls/GameControls';
import useGameState from './hooks/useGameState';
import usePieceMovement from './hooks/usePieceMovement';
import PieceDish from './components/Board/PieceDish';

const {width, height} = Dimensions.get('window');
const boardSize = Math.min(width, height) * 0.9;
const cellSize = boardSize / 8;
const pieceSize = 30;

const Game = () => {
  const {pieces, setPieces, boardState, setBoardState, resetGame} =
    useGameState(pieceSize, boardSize);

  const boardOffset = {
    x: (width - boardSize) / 2,
    y: (height - boardSize) / 2,
  };

  const {updatePiecePosition} = usePieceMovement(
    pieces,
    setPieces,
    boardState,
    setBoardState,
    cellSize,
    boardOffset,
  );

  return (
    <View style={{flex: 1}}>
      <GameBoard
        boardSize={boardSize}
        cellSize={cellSize}
        boardOffset={boardOffset}
      />
      <PieceDish boardSize={boardSize} pieceSize={pieceSize} />
      <PieceContainer
        pieces={pieces}
        boardSize={boardSize}
        cellSize={cellSize}
        pieceSize={pieceSize}
        boardOffset={boardOffset}
        updatePosition={updatePiecePosition}
      />
      <GameControls resetGame={resetGame} />
    </View>
  );
};

export default Game;
