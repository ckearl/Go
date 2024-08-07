// components/Piece/Piece.js

import React, {useRef, useEffect} from 'react';
import {Animated, PanResponder, Dimensions} from 'react-native';
import createStyles from './style';
import {
  PILE_VERTICAL_CENTER,
  PILE_RIGHT_POSITION,
  PILE_LEFT_POSITION,
  PIECE_ANIMATION_DAMPING,
  PIECE_ANIMATION_STIFFNESS,
} from '../../constants/constants';

const {width: screenWidth, height: screenHeight} = Dimensions.get('window');

const Piece = ({
  id,
  color,
  boardSize,
  cellSize,
  initialX,
  initialY,
  updatePosition,
  boardOffset,
  pieceSize,
  boardDimension,
}) => {
  const pan = useRef(new Animated.ValueXY()).current;
  const styles = createStyles(pieceSize, color);

  useEffect(() => {
    pan.setValue({x: initialX - pieceSize / 2, y: initialY - pieceSize / 2});
  }, [initialX, initialY, pieceSize, pan]);

  const generateIntersections = () => {
    const intersections = [];

    for (let i = 0; i < boardDimension; i++) {
      for (let j = 0; j < boardDimension; j++) {
        intersections.push({
          x: i * cellSize + boardOffset.x,
          y: j * cellSize + boardOffset.y,
        });
      }
    }

    return intersections;
  };

  const intersections = generateIntersections();

  const springConfig = {
    damping: PIECE_ANIMATION_DAMPING,
    stiffness: PIECE_ANIMATION_STIFFNESS,
  };

  const snapToPosition = (x, y) => {
    Animated.spring(pan, {
      toValue: {x: x - pieceSize / 2, y: y - pieceSize / 2},
      useNativeDriver: true,
      ...springConfig,
    }).start();

    updatePosition(id, x, y);
  };

  const returnToPile = () => {
    const pileX =
      color === 'black'
        ? screenWidth * PILE_LEFT_POSITION
        : screenWidth * PILE_RIGHT_POSITION;

    const pileY = screenHeight - boardSize * PILE_VERTICAL_CENTER;

    Animated.spring(pan, {
      toValue: {x: pileX - pieceSize / 2, y: pileY - pieceSize / 2},
      useNativeDriver: true,
      ...springConfig,
    }).start();

    updatePosition(id, pileX, pileY);
  };

  const panResponder = PanResponder.create({
    onMoveShouldSetPanResponder: () => true,

    onPanResponderGrant: () => {
      pan.setOffset({
        x: pan.x._value,
        y: pan.y._value,
      });
      pan.setValue({x: 0, y: 0});
    },

    onPanResponderMove: Animated.event([null, {dx: pan.x, dy: pan.y}], {
      useNativeDriver: false,
    }),

    onPanResponderRelease: (_, gesture) => {
      pan.flattenOffset();
      const pieceX = gesture.moveX;
      const pieceY = gesture.moveY;

      let insideIntersection = intersections.find(intersection =>
        isInside(intersection, pieceX, pieceY),
      );

      if (insideIntersection) {
        snapToPosition(insideIntersection.x, insideIntersection.y);
      } else {
        returnToPile();
      }
    },
  });

  const isInside = (intersection, pieceX, pieceY) => {
    const distance = Math.sqrt(
      Math.pow(intersection.x - pieceX, 2) +
        Math.pow(intersection.y - pieceY, 2),
    );
    return distance <= cellSize / 2;
  };

  return (
    <Animated.View
      style={[
        {
          ...styles.piece,
        },
        {
          transform: [{translateX: pan.x}, {translateY: pan.y}],
        },
      ]}
      {...panResponder.panHandlers}></Animated.View>
  );
};

export default Piece;
