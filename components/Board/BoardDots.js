import React from 'react';
import {View, StyleSheet} from 'react-native';

const BOARD_DOTS = {
  7: [
    {x: 2, y: 2},
    {x: 4, y: 2},
    {x: 2, y: 4},
    {x: 4, y: 4},
  ],
  9: [
    {x: 2, y: 2},
    {x: 2, y: 6},
    {x: 4, y: 4},
    {x: 6, y: 2},
    {x: 6, y: 6},
  ],
  11: [
    {x: 3, y: 3},
    {x: 3, y: 7},
    {x: 5, y: 5},
    {x: 7, y: 3},
    {x: 7, y: 7},
  ],
  13: [
    {x: 3, y: 3},
    {x: 3, y: 9},
    {x: 6, y: 6},
    {x: 9, y: 3},
    {x: 9, y: 9},
  ],
};

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
