// components/GameBoard/GameBoard.js

import React from 'react';
import {View} from 'react-native';
import Board from './Board';
import BoardDots from './BoardDots';
import CoordinateLabels from './CoordinateLabels';

const GameBoard = ({boardSize, cellSize, boardOffset, boardDimension}) => {
  return (
    <View
      style={{position: 'absolute', left: boardOffset.x, top: boardOffset.y}}>
      <CoordinateLabels
        cellSize={cellSize}
        boardSize={boardSize}
        boardDimension={boardDimension}
      />
      <Board
        boardSize={boardSize}
        cellSize={cellSize}
        boardDimension={boardDimension}
      />
    </View>
  );
};

export default GameBoard;
