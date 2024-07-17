import {Text, View} from 'react-native';
import React from 'react';

const createLabel = (
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
        position: 'absolute',
        [movingDirection]: i * cellSize + cellSize / 2 - movingDirectionScale,
        [staticDirection]: staticDirectionScale,
        color: 'black',
        fontSize: 10,
        zIndex: 1,
      }}>
      {labelType === 'number' ? numbers[i] : letters[i]}
    </Text>
  );
};

const CoordinateLabels = ({cellSize, boardSize}) => {
  const labels = [];
  for (let i = 0; i < 10; i++) {
    // Letter Board Labels
    labels.push(
      createLabel(cellSize, 'letter-top', i, 'left', 24, 'bottom', 4, 'letter'),
    );
    labels.push(
      createLabel(
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
      createLabel(cellSize, 'number-left', i, 'top', 26, 'left', -12, 'number'),
    );
    labels.push(
      createLabel(
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
  return <View style={{zIndex: 10000}}>{labels}</View>;
};

export default CoordinateLabels;
