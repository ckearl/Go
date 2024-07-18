import {StyleSheet} from 'react-native';

const createStyles = () => {
  return StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'beige',
    },
    button: {
      backgroundColor: '#4CAF50',
      padding: 10,
      margin: 10,
      borderRadius: 5,
      width: 200,
      alignItems: 'center',
    },
    buttonText: {
      color: 'white',
      fontSize: 18,
    },
    overlay: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      justifyContent: 'flex-end',
    },
    popover: {
      position: 'absolute',
      right: 0,
      top: 0,
      bottom: 0,
      width: 300,
      backgroundColor: 'white',
      padding: 20,
      justifyContent: 'center',
      alignItems: 'center',
    },
    popoverTitle: {
      fontSize: 20,
      fontWeight: 'bold',
      marginBottom: 20,
    },
    gridContainer: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'space-between',
      width: '100%',
      paddingHorizontal: 10,
    },
    gridButton: {
      width: '45%',
      aspectRatio: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#4CAF50',
      margin: 5,
      borderRadius: 10,
    },
    gridButtonText: {
      color: 'white',
      fontSize: 24,
      fontWeight: 'bold',
    },
  });
};

export default createStyles;
