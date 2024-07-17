// components/GameBoard/GameBoard.js

import React from 'react';
import {View} from 'react-native';
import Board from './Board';
import CoordinateLabels from './CoordinateLabels';

const GameBoard = ({boardSize, cellSize, boardOffset}) => {
  return (
    <View
      style={{position: 'absolute', left: boardOffset.x, top: boardOffset.y}}>
      <CoordinateLabels cellSize={cellSize} boardSize={boardSize} />
      <Board boardSize={boardSize} cellSize={cellSize} />
    </View>
  );
};

export default GameBoard;
