// components/MainMenu/BackgroundImage/BackgroundImage.js

import React, {useEffect, useRef} from 'react';
import {Animated, Easing, ImageBackground} from 'react-native';
import styles from './style';
import {
    INPUT_RANGE_START,
    INPUT_RANGE_END,
    OUTPUT_RANGE_START,
    OUTPUT_RANGE_END,
    ANIMATION_TO_VALUE,
    ANIMATION_DURATION,
} from './constants';

const backgroundImage = '../../../assets/images/background-languages.png';

export default function BackgroundAnimation() {
  const initialValue = 0;
  const translateValue = useRef(new Animated.Value(initialValue)).current;

  useEffect(() => {
    let animationFrame;
    const translate = () => {
      translateValue.setValue(initialValue);
      Animated.timing(translateValue, {
        toValue: ANIMATION_TO_VALUE,
        duration: ANIMATION_DURATION,
        easing: Easing.linear,
        useNativeDriver: true,
      }).start(() => {
        animationFrame = requestAnimationFrame(translate);
      });
    };
    translate();

    return () => {
      cancelAnimationFrame(animationFrame);
      translateValue.stopAnimation();
    };
  }, [translateValue]);

  const translateAnimation = translateValue.interpolate({
    inputRange: [INPUT_RANGE_START, INPUT_RANGE_END],
    outputRange: [OUTPUT_RANGE_START, OUTPUT_RANGE_END],
  });

  const AnimatedImage = Animated.createAnimatedComponent(ImageBackground);

  return (
    <AnimatedImage
      resizeMode="repeat"
      style={[
        styles.background,
        {
          transform: [
            {
              translateX: translateAnimation,
            },
            {
              translateY: translateAnimation,
            },
            {
                scale: 1.2,
            },
          ],
        },
      ]}
      source={require(backgroundImage)}
    />
  );
}
