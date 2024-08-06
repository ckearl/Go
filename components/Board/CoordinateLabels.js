// components/Board/CooridnateLabels.js

import React, {useState, useMemo, useCallback} from 'react';
import {Dimensions, Text, View} from 'react-native';
import createStyles from './style';
import {
  COORDINATE_LABEL_FONT_SIZE,
  COORDINATE_LABEL_LETTERS,
  COORDINATE_LABEL_NUMBERS,
} from '../../constants/constants';

const {width} = Dimensions.get('window');

const CoordinateLabels = ({cellSize, boardSize, boardDimension}) => {
  const [letterWidth, setLetterWidth] = useState(0);

  const styles = createStyles(boardSize, cellSize);

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
        text: COORDINATE_LABEL_LETTERS[i],
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
        text: COORDINATE_LABEL_LETTERS[i],
      });

      leftLabels.push({
        key: `number-left-${i}`,
        style: {
          ...styles.coordinateLabel,
          top:
            i * cellSize +
            cellSize / 2 -
            COORDINATE_LABEL_FONT_SIZE / 2 -
            coordinateGap +
            COORDINATE_LABEL_FONT_SIZE,
          left: -12,
        },
        text: COORDINATE_LABEL_NUMBERS[i],
      });

      rightLabels.push({
        key: `number-right-${i}`,
        style: {
          ...styles.coordinateLabel,
          top:
            i * cellSize +
            cellSize / 2 -
            COORDINATE_LABEL_FONT_SIZE / 2 -
            coordinateGap +
            COORDINATE_LABEL_FONT_SIZE,
          right: -12,
        },
        text: COORDINATE_LABEL_NUMBERS[i],
      });
    }

    return {topLabels, bottomLabels, leftLabels, rightLabels};
  }, [
    coordinateGap,
    letterWidth,
    boardDimension,
    boardSize,
    cellSize,
    COORDINATE_LABEL_LETTERS,
    COORDINATE_LABEL_NUMBERS,
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
