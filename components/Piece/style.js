// components/Piece/style.js

import {StyleSheet} from 'react-native';

const createStyles = (pieceSize, color) =>
  StyleSheet.create({
    piece: {
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
  });

export default createStyles;
