// components/GameControls/GameControls.js

import React from 'react';
import {View, Text, Button} from 'react-native';
import styles from './style';

const GameControls = ({resetGame}) => {
  return (
    <View>
      <Text style={styles.controls}>Let's Play Go!</Text>
      <Button title="Reset Game" onPress={resetGame} />
    </View>
  );
};

export default GameControls;
