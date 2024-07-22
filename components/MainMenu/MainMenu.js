// components/MainMenu/MainMenu.js

import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Animated,
  TouchableWithoutFeedback,
} from 'react-native';
import createStyles from './style';

const MainMenu = ({navigation}) => {
  const styles = createStyles();
  const [popoverAnim] = useState(new Animated.Value(400));
  const [popoverVisible, setPopoverVisible] = useState(false);

  const showPopover = () => {
    setPopoverVisible(true);
    Animated.timing(popoverAnim, {
      toValue: 0,
      duration: 300,
      useNativeDriver: true,
    }).start();
  };

  const hidePopover = () => {
    Animated.timing(popoverAnim, {
      toValue: 400,
      duration: 300,
      useNativeDriver: true,
    }).start(() => setPopoverVisible(false));
  };

  const handleBoardSizeSelect = size => {
    console.log(`Selected board size: ${size}`);
    hidePopover();
  };

  const boardSizes = ['7x7', '9x9', '13x13', '19x19'];

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={showPopover}>
        <Text style={styles.buttonText}>Play Now</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Options')}>
        <Text style={styles.buttonText}>Board Options</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Stats')}>
        <Text style={styles.buttonText}>Stats</Text>
      </TouchableOpacity>
      {popoverVisible && (
        <TouchableWithoutFeedback onPress={hidePopover}>
          <View style={styles.overlay}>
            <TouchableWithoutFeedback>
              <Animated.View
                style={[
                  styles.popover,
                  {transform: [{translateX: popoverAnim}]},
                ]}>
                <Text style={styles.popoverTitle}>Select a board size</Text>
                <View style={styles.gridContainer}>
                  {boardSizes.map((size, index) => (
                    <TouchableOpacity
                      key={size}
                      style={styles.gridButton}
                      onPress={() => handleBoardSizeSelect(size)}>
                      <Text style={styles.gridButtonText}>{size}</Text>
                    </TouchableOpacity>
                  ))}
                </View>
              </Animated.View>
            </TouchableWithoutFeedback>
          </View>
        </TouchableWithoutFeedback>
      )}
    </View>
  );
};

export default MainMenu;
