// components/PieceContainer/PieceContainer.js

import React from 'react';
import {View} from 'react-native';
import Piece from './Piece';

const PieceContainer = ({
  pieces,
  boardSize,
  cellSize,
  pieceSize,
  boardOffset,
  updatePosition,
  boardDimension,
}) => {
  return (
    <View style={{zIndex: 1}}>
      {pieces.map(piece => (
        <Piece
          key={piece.id}
          id={piece.id}
          color={piece.color}
          boardSize={boardSize}
          cellSize={cellSize}
          initialX={piece.x}
          initialY={piece.y}
          updatePosition={updatePosition}
          boardOffset={boardOffset}
          pieceSize={pieceSize}
          boardDimension={boardDimension}
        />
      ))}
    </View>
  );
};

export default PieceContainer;
