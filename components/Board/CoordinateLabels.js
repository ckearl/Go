// components/Board/CooridnateLabels.js

import {Text, View} from 'react-native';
import React from 'react';
import createStyles from './style';


const createLabel = (
  styles,
  cellSize,
  positionKey,
  i,
  movingDirection,
  movingDirectionScale,
  staticDirection,
  staticDirectionScale,
  labelType,
  ) => {
    const letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I'];
    const numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
    return (
      <Text
      key={`${positionKey}-${i}`}
      style={{
        ...styles.coordinateLabel,
        [movingDirection]: i * cellSize + cellSize / 2 - movingDirectionScale,
        [staticDirection]: staticDirectionScale,
      }}>
      {labelType === 'number' ? numbers[i] : letters[i]}
    </Text>
  );
};

const CoordinateLabels = ({cellSize, boardSize}) => {
  const styles = createStyles(boardSize, cellSize);
  const labels = [];
  for (let i = 0; i < 10; i++) {
    // Letter Board Labels
    labels.push(
      createLabel(styles, cellSize, 'letter-top', i, 'left', 24, 'bottom', 4, 'letter'),
    );
    labels.push(
      createLabel(
        styles,
        cellSize,
        'letter-bottom',
        i,
        'left',
        24,
        'top',
        boardSize + 4,
        'letter',
      ),
    );

    // Number Board Labels
    labels.push(
      createLabel(styles, cellSize, 'number-left', i, 'top', 26, 'left', -12, 'number'),
    );
    labels.push(
      createLabel(
        styles,
        cellSize,
        'number-right',
        i,
        'top',
        26,
        'right',
        -12,
        'number',
      ),
    );
  }
  return <View style={{zIndex: 1}}>{labels}</View>;
};

export default CoordinateLabels;
