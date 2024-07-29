// components/Board/Board.js
import React from 'react';
import {Image, View} from 'react-native';
import createStyles from './style';
import BoardDots from './BoardDots';

const Board = ({boardSize, cellSize, children, boardDimension}) => {
  const styles = createStyles(boardSize, cellSize);

  const renderLines = () => {
    const lines = [];
    for (let i = 0; i <= boardDimension - 1; i++) {
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
        <BoardDots cellSize={cellSize} boardDimension={boardDimension} />
        </View>
      {children}
    </View>
  );
};

export default Board;
