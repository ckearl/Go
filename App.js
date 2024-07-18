// App.js

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import MainMenu from './components/MainMenu/MainMenu';
import Game from './Game';
import Options from './components/Options/Options';
import Stats from './components/Stats/Stats';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="MainMenu">
        <Stack.Screen
          name="MainMenu"
          component={MainMenu}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Game"
          component={Game}
          options={{headerShown: false}}
        />
        <Stack.Screen name="Options" component={Options} />
        <Stack.Screen name="Stats" component={Stats} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
