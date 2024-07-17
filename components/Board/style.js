// src/components/Board/style.js
import {StyleSheet} from 'react-native';

const createStyles = (gridSize, boardSize) => {
  return StyleSheet.create({
    board: {
      width: boardSize,
      height: boardSize,
      backgroundColor: '#E5B068', // Go board color
      justifyContent: 'center',
      alignItems: 'center',
      overflow: 'hidden',
    },
    boardBackground: {
      width: boardSize,
      height: boardSize,
      // position: 'absolute',
    },
  });
};

export default createStyles;
