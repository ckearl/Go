// /src/components/Piece/Piece.js

import React, {useRef, useEffect} from 'react';
import {Animated, PanResponder, Dimensions} from 'react-native';

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
}) => {
  const pan = useRef(new Animated.ValueXY()).current;

  useEffect(() => {
    pan.setValue({x: initialX - pieceSize / 2, y: initialY - pieceSize / 2});
  }, [initialX, initialY, pieceSize, pan]);

  const generateIntersections = () => {
    const intersections = [];
    for (let i = 0; i < 9; i++) {
      for (let j = 0; j < 9; j++) {
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
    damping: 15,
    stiffness: 150,
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
    const pileX = color === 'black' ? screenWidth * 0.75 : screenWidth * 0.25;
    const pileY = screenHeight - boardSize * 0.35;

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
          width: pieceSize,
          height: pieceSize,
          backgroundColor: color,
          borderRadius: pieceSize / 2,
          borderColor: color === 'black' ? 'white' : 'black',
          borderWidth: 1,
          justifyContent: 'center',
          alignItems: 'center',
          position: 'absolute',
          zIndex: 1,
        },
        {
          transform: [{translateX: pan.x}, {translateY: pan.y}],
        },
      ]}
      {...panResponder.panHandlers}></Animated.View>
  );
};

export default Piece;
