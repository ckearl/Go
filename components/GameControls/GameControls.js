// src/components/GameControls/GameControls.js

import React from 'react';
import {View, Text, Button} from 'react-native';

const GameControls = ({resetGame}) => {
  return (
    <View>
      <Text
        style={{
          textAlign: 'center',
          fontSize: 30,
          fontWeight: 'bold',
          marginTop: 80,
          marginBottom: 20,
        }}>
        Baduk
      </Text>
      <Button title="Reset Game" onPress={resetGame} />
    </View>
  );
};

export default GameControls;
