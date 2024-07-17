// components/Board/Board.js
import React from 'react';
import {Image, View} from 'react-native';
import createStyles from './style';

const Board = ({boardSize, cellSize, children}) => {
  const styles = createStyles(boardSize, cellSize);

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
            style={[
              styles.dot,
              {
                left: i * 2 * cellSize + 2 * cellSize - 5,
                top: j * 2 * cellSize + 2 * cellSize - 5,
              },
            ]}
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
          key={`vLine${i}`}
          style={[styles.verticalLine, {left: i * cellSize}]}
        />,
      );
      // Horizontal lines
      lines.push(
        <View
          key={`hLine${i}`}
          style={[styles.horizontalLine, {top: i * cellSize}]}
        />,
      );
    }
    return lines;
  };

  return (
    <View style={styles.board}>
      <Image
        style={styles.boardBackground}
        source={require('../../assets/images/wood-grain.jpg')}
        resizeMode="cover"
      />
      <View style={styles.linesContainer}>
        {renderLines()}
        {renderDots()}
      </View>
      {children}
    </View>
  );
};

export default Board;
