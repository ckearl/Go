// components/Options/Options.js

import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import createStyles from './style';

const Options = () => {
  const styles = createStyles();
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Board Options Screen</Text>
    </View>
  );
};

export default Options;
