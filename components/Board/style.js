// components/Board/style.js
import {StyleSheet} from 'react-native';

const createStyles = (boardSize, cellSize) => {
  return StyleSheet.create({
    dot: {
      width: 10,
      height: 10,
      backgroundColor: 'black',
      borderRadius: 5,
      position: 'absolute',
    },
    board: {
      width: boardSize,
      height: boardSize,
      backgroundColor: '#E5B068',
      justifyContent: 'center',
      alignItems: 'center',
      overflow: 'hidden',
      borderWidth: 1,
      borderColor: 'black',
    },
    boardBackground: {
      width: '100%',
      height: '100%',
      position: 'absolute',
    },
    linesContainer: {
      width: boardSize,
      height: boardSize,
      position: 'absolute',
    },
    verticalLine: {
      width: 1,
      height: boardSize,
      backgroundColor: 'black',
      position: 'absolute',
    },
    horizontalLine: {
      width: boardSize,
      height: 1,
      backgroundColor: 'black',
      position: 'absolute',
    },
    coordinateLabel: {
      position: 'absolute',
      color: 'black',
      fontSize: 10,
      fontFamily: 'Roboto Mono',
      zIndex: 1,
    },
  });
};

export default createStyles;
