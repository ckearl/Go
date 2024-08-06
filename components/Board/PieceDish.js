// components/Board/PieceDish.js

import React, {useEffect, useRef} from 'react';
import {Dimensions, View, Animated} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {
  PILE_DISH_VERTICAL_CENTER,
  PILE_RIGHT_POSITION,
  PILE_LEFT_POSITION,
} from '../../constants/constants';

const {width, height} = Dimensions.get('window');

const PieceDish = ({boardSize, pieceSize}) => {
  const pileRadius = pieceSize * 1.5;
  const shineAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.loop(
      Animated.timing(shineAnim, {
        toValue: 1,
        duration: 3000,
        useNativeDriver: true,
      }),
    ).start();
  }, []);

  const dishes = [];

  for (let i = 0; i < 2; i++) {
    const isBlack = i === 0;
    const pileCenterX = isBlack
      ? width * PILE_LEFT_POSITION
      : width * PILE_RIGHT_POSITION;
    const pileCenterY = height - boardSize * PILE_DISH_VERTICAL_CENTER;
    const dishSize = pileRadius * 2 + (pieceSize * 3) / 2.5;

    const shineTravelDistance = Math.sqrt(2) * dishSize * 2;

    dishes.push(
      <View
        key={`piece-dish-${i}`}
        style={{
          width: dishSize,
          height: dishSize,
          borderRadius: dishSize / 2,
          borderWidth: 1,
          borderColor: 'black',
          position: 'absolute',
          left: pileCenterX - dishSize / 2,
          top: pileCenterY,
          overflow: 'hidden',
          zIndex: 0,
        }}>
        <LinearGradient
          colors={['#bcc6cc', '#eee', '#bcc6cc']}
          style={{
            width: '100%',
            height: '100%',
          }}
        />
        <Animated.View
          style={{
            width: dishSize,
            height: dishSize,
            position: 'absolute',
            transform: [
              {
                translateX: shineAnim.interpolate({
                  inputRange: [0, 1],
                  outputRange: [-shineTravelDistance, shineTravelDistance],
                }),
              },
              {
                translateY: shineAnim.interpolate({
                  inputRange: [0, 1],
                  outputRange: [-shineTravelDistance, shineTravelDistance],
                }),
              },
              {rotate: '30deg'},
            ],
          }}>
          <LinearGradient
            colors={[
              'rgba(255,255,255,0)',
              'rgba(255,255,255,0.8)',
              'rgba(255,255,255,0)',
            ]}
            start={{x: 0, y: 0.5}}
            end={{x: 1, y: 0.5}}
            style={{
              width: '100%',
              height: '100%',
            }}
          />
        </Animated.View>
      </View>,
    );
  }

  return <View>{dishes}</View>;
};

export default PieceDish;
