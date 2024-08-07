// Game.js

import React from 'react';
import {Button, Dimensions, View} from 'react-native';
import GameBoard from './components/Board/GameBoard';
import PieceContainer from './components/Piece/PieceContainer';
import GameControls from './components/GameControls/GameControls';
import useGameState from './hooks/useGameState';
import usePieceMovement from './hooks/usePieceMovement';
import PieceDish from './components/Board/PieceDish';
import globalStyles from './assets/styles/globalStyles';
import {BOARD_WIDTH_DIVISOR, PIECE_SIZE_MAP} from './constants/constants';

const {width, height} = Dimensions.get('window');
const boardSize = Math.min(width, height) * BOARD_WIDTH_DIVISOR;

function extractBoardDimension(stringBoardDimension) {
  return parseInt(stringBoardDimension.split('x')[0]);
}

const Game = ({route, navigation}) => {
  const boardDimension =
    extractBoardDimension(route.params?.boardDimension) || 9;
  const pieceSize = PIECE_SIZE_MAP[boardDimension];
  const cellSize = boardSize / (boardDimension - 1);
  const {pieces, setPieces, boardState, updateBoardState, resetGame} =
    useGameState(pieceSize, boardSize, boardDimension);

  const boardOffset = {
    x: (width - boardSize) / 2,
    y: (height - boardSize) / 2,
  };

  const {updatePiecePosition} = usePieceMovement(
    pieces,
    setPieces,
    boardState,
    updateBoardState,
    cellSize,
    boardOffset,
    boardDimension,
  );

  return (
    <View style={{flex: 1}}>
      <View style={globalStyles.gameBackButton}>
        <Button
          title="Back"
          onPress={() => {
            navigation.navigate('MainMenu');
          }}
        />
      </View>
      <GameBoard
        boardSize={boardSize}
        cellSize={cellSize}
        boardOffset={boardOffset}
        boardDimension={boardDimension}
      />
      <PieceDish boardSize={boardSize} pieceSize={pieceSize} />
      <PieceContainer
        pieces={pieces}
        boardSize={boardSize}
        cellSize={cellSize}
        pieceSize={pieceSize}
        boardOffset={boardOffset}
        updatePosition={updatePiecePosition}
        boardDimension={boardDimension}
      />
      <GameControls resetGame={resetGame} />
    </View>
  );
};

export default Game;
