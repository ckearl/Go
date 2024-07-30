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

const {width, height} = Dimensions.get('window');
const boardSize = Math.min(width, height) * 0.9;
const pieceSize = 30;

function extractBoardDimension(stringBoardDimension) {
  return parseInt(stringBoardDimension.split('x')[0]);
}

const Game = ({route, navigation}) => {
  const boardDimension =
    extractBoardDimension(route.params?.boardDimension) || 9;
  const cellSize = boardSize / (boardDimension - 1);
  const {pieces, setPieces, boardState, setBoardState, resetGame} =
    useGameState(pieceSize, boardSize, boardDimension);

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
      <View
        style={globalStyles.gameBackButton}>
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
      />
      <GameControls resetGame={resetGame} />
    </View>
  );
};

export default Game;
