// components/Stats/Stats.js

import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import createStyles from './style';

const Stats = () => {
  const styles = createStyles();
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Stats Screen</Text>
    </View>
  );
};

export default Stats;
