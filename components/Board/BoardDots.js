import React from 'react';
import {View, StyleSheet} from 'react-native';

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

  console.log(`size in renderDots: ${size}`);

  const dots = [];

  if (size === 7) {
    const dotCoordinates = [
      {x: 2, y: 2},
      {x: 4, y: 2},
      {x: 2, y: 4},
      {x: 4, y: 4},
    ];

    const dots = dotCoordinates.map(({x, y}) => (
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

    return dots;
  } else if (size === 9) {
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
  } else if (size === 11) {
    const dotCoordinates = [
      {x: 2, y: 2},
      {x: 2, y: 8},
      {x: 5, y: 5},
      {x: 8, y: 2},
      {x: 8, y: 8},
    ];

    const dots = dotCoordinates.map(({x, y}) => (
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

    return dots;

  } else if (size === 13) {
    const dotCoordinates = [
      {x: 3, y: 3},
      {x: 3, y: 9},
      {x: 6, y: 6},
      {x: 9, y: 3},
      {x: 9, y: 9},
    ];

    const dots = dotCoordinates.map(({x, y}) => (
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

    return dots;
  }
}

const BoardDots = ({cellSize, boardDimension}) => {
  const dots = renderDots(cellSize, boardDimension);

  return <View>{dots}</View>;
};

export default BoardDots;
