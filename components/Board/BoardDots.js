import React from 'react';
import {View, StyleSheet} from 'react-native';
import {BOARD_DOTS} from '../../constants/constants';


function renderDots(cellSize, size) {
  const styles = StyleSheet.create({
    dot: {
      width: 10,
      height: 10,
      backgroundColor: 'black',
      borderRadius: 5,
      position: 'absolute',
    },
  });

  return BOARD_DOTS[size].map(({x, y}) => (
    <View
      key={`dot-${x}-${y}`}
      style={[
        styles.dot,
        {
          left: x * cellSize - 5,
          top: y * cellSize - 5,
        },
      ]}
    />
  ));
}

const BoardDots = ({cellSize, boardDimension}) => {
  const dots = renderDots(cellSize, boardDimension);

  return <View>{dots}</View>;
};

export default BoardDots;
