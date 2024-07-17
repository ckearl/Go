// App.js

import React from 'react';
import {View} from 'react-native';
import Game from './Game';

const App = () => {
  return (
    <View style={{flex: 1, backgroundColor: 'beige'}}>
      <Game />
    </View>
  );
};

export default App;
