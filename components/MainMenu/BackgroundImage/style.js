// components/MainMenu/BackgroundImage/style.js

import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  background: {
    position: 'absolute',
    width: 1200,
    height: 1200,
    top: 0,
    opacity: 0.2,
    transform: [
      {
        translateX: 0,
      },
      {
        translateY: 0,
      },
      {
        scale: 1.2,
      },
    ],
  },
});

export default styles;
