// components/Board/CooridnateLabels.js

import React, {useState, useMemo, useCallback} from 'react';
import {Dimensions, Text, View} from 'react-native';
import createStyles from './style';

const {width} = Dimensions.get('window');

const TEXT_HEIGHT = 10; // Fixed height of the text

const CoordinateLabels = ({cellSize, boardSize, boardDimension}) => {
  const [letterWidth, setLetterWidth] = useState(0);

  const styles = createStyles(boardSize, cellSize);
  const letters = [
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    'G',
    'H',
    'I',
    'J',
    'K',
    'L',
    'M',
  ];
  const numbers = [
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    '10',
    '11',
    '12',
    '13',
  ];

  const coordinateGap = useMemo(() => {
    if (letterWidth > 0) {
      return (
        (width - (width / 10 - letterWidth) - boardDimension * letterWidth) /
        (boardDimension - 1)
      );
    }
    return 0;
  }, [letterWidth, boardDimension]);

  const computeLabelPositions = useCallback(() => {
    const topLabels = [];
    const bottomLabels = [];
    const leftLabels = [];
    const rightLabels = [];

    for (let i = 0; i < boardDimension; i++) {
      topLabels.push({
        key: `letter-top-${i}`,
        style: {
          ...styles.coordinateLabel,
          left:
            (i + 1) * coordinateGap +
            (i + 1) * letterWidth -
            letterWidth -
            coordinateGap,
          bottom: 4,
          zIndex: 1,
        },
        text: letters[i],
      });

      bottomLabels.push({
        key: `letter-bottom-${i}`,
        style: {
          ...styles.coordinateLabel,
          left:
            (i + 1) * coordinateGap +
            (i + 1) * letterWidth -
            letterWidth -
            coordinateGap,
          top: boardSize + 4,
        },
        text: letters[i],
      });

      leftLabels.push({
        key: `number-left-${i}`,
        style: {
          ...styles.coordinateLabel,
          top:
            i * cellSize +
            cellSize / 2 -
            TEXT_HEIGHT / 2 -
            coordinateGap +
            TEXT_HEIGHT, // Adjust position
          left: -12,
        },
        text: numbers[i],
      });

      rightLabels.push({
        key: `number-right-${i}`,
        style: {
          ...styles.coordinateLabel,
          top:
            i * cellSize +
            cellSize / 2 -
            TEXT_HEIGHT / 2 -
            coordinateGap +
            TEXT_HEIGHT, // Adjust position
          right: -12,
        },
        text: numbers[i],
      });
    }

    return {topLabels, bottomLabels, leftLabels, rightLabels};
  }, [
    coordinateGap,
    letterWidth,
    boardDimension,
    boardSize,
    cellSize,
    letters,
    numbers,
    styles.coordinateLabel,
  ]);

  const {topLabels, bottomLabels, leftLabels, rightLabels} =
    computeLabelPositions();

  return (
    <View style={{zIndex: 1}}>
      {topLabels.map(({key, style, text}) => (
        <Text
          key={key}
          style={style}
          onLayout={event => {
            const {width} = event.nativeEvent.layout;
            if (letterWidth === 0) {
              setLetterWidth(width);
            }
          }}>
          {text}
        </Text>
      ))}
      {bottomLabels.map(({key, style, text}) => (
        <Text
          key={key}
          style={style}
          onLayout={event => {
            const {width} = event.nativeEvent.layout;
            if (letterWidth === 0) {
              setLetterWidth(width);
            }
          }}>
          {text}
        </Text>
      ))}
      {leftLabels.map(({key, style, text}) => (
        <Text
          key={key}
          style={style}
          onLayout={event => {
            const {width} = event.nativeEvent.layout;
            if (letterWidth === 0) {
              setLetterWidth(width);
            }
          }}>
          {text}
        </Text>
      ))}
      {rightLabels.map(({key, style, text}) => (
        <Text
          key={key}
          style={style}
          onLayout={event => {
            const {width} = event.nativeEvent.layout;
            if (letterWidth === 0) {
              setLetterWidth(width);
            }
          }}>
          {text}
        </Text>
      ))}
    </View>
  );
};

export default CoordinateLabels;
