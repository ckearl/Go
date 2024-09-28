// components/Board/Board.js
import React from 'react';
import {Image, View} from 'react-native';
import createStyles from './style';
import BoardDots from './BoardDots';
import BoardLines from './BoardLines';

// keep the streak

const Board = ({boardSize, cellSize, children, boardDimension}) => {
  const styles = createStyles(boardSize, cellSize);

  return (
    <View style={styles.board}>
      <Image
        style={styles.boardBackground}
        source={require('../../assets/images/wood-grain.jpg')}
        resizeMode="cover"
      />
      <View style={styles.linesContainer}>
        <BoardLines
          boardSize={boardSize}
          cellSize={cellSize}
          boardDimension={boardDimension}
        />
        <BoardDots cellSize={cellSize} boardDimension={boardDimension} />
        </View>
      {children}
    </View>
  );
};

export default Board;
