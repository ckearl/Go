// components/Board/Board.js

import React from 'react';
import {Image, Text, View} from 'react-native';

const Board = ({boardSize, cellSize, children}) => {
  const renderDots = () => {
    const dots = [];
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        if (
          (i === 1 && j === 0) ||
          (i === 0 && j === 1) ||
          (i === 2 && j === 1) ||
          (i === 1 && j === 2)
        ) {
          continue;
        }
        dots.push(
          <View
            key={`${i}-${j}`}
            style={{
              width: 10,
              height: 10,
              backgroundColor: 'black',
              borderRadius: 5,
              position: 'absolute',
              left: i * 2 * cellSize + 2 * cellSize - 5,
              top: j * 2 * cellSize + 2 * cellSize - 5,
            }}
          />,
        );
      }
    }
    return dots;
  };
  const renderLines = () => {
    const lines = [];
    for (let i = 0; i <= 8; i++) {
      // Vertical lines
      lines.push(
        <View
          key={`v${i}`}
          style={{
            width: 1,
            height: boardSize,
            backgroundColor: 'black',
            position: 'absolute',
            left: i * cellSize,
          }}
        />,
      );
      // Horizontal lines
      lines.push(
        <View
          key={`h${i}`}
          style={{
            width: boardSize,
            height: 1,
            backgroundColor: 'black',
            position: 'absolute',
            top: i * cellSize,
          }}
        />,
      );
    }
    return lines;
  };

  return (
    <View
      style={{
        width: boardSize,
        height: boardSize,
        backgroundColor: '#E5B068',
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden',
        borderWidth: 1,
        borderColor: 'black',
      }}>
      <Image
        style={{
          width: '100%',
          height: '100%',
          position: 'absolute',
        }}
        source={require('../../assets/images/wood-grain.jpg')}
        resizeMode="cover"
      />
      <View
        style={{
          width: boardSize,
          height: boardSize,
          position: 'absolute',
        }}>
        {renderLines()}
        {renderDots()}
      </View>
      {children}
    </View>
  );
};

export default Board;
