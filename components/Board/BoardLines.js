import React from 'react';
import {View} from 'react-native';

const BoardLines = ({boardSize, cellSize, boardDimension}) => {
  const renderLines = () => {
    const lines = [];
    for (let i = 0; i <= boardDimension - 1; i++) {
      // Vertical lines
      lines.push(
        <View
          key={`vLine${i}`}
          style={{
            position: 'absolute',
            left: i * cellSize,
            height: boardSize,
            width: 1,
            backgroundColor: 'black',
          }}
        />,
      );
      // Horizontal lines
      lines.push(
        <View
          key={`hLine${i}`}
          style={{
            position: 'absolute',
            top: i * cellSize,
            height: 1,
            width: boardSize,
            backgroundColor: 'black',
          }}
        />,
      );
    }
    return lines;
  };

  return <View>{renderLines()}</View>;
};

export default BoardLines;
