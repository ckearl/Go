import {StyleSheet} from 'react-native';
import {
  horizontalScale,
  verticalScale,
  scaleFontSize,
} from '../../assets/styles/scaling';

const createStyles = () => {
  return StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#1B242C',
      zIndex: 0
    },
    title: {
      fontSize: scaleFontSize(48),
      color: 'white',
      fontWeight: 'bold',
      marginHorizontal: horizontalScale(60),
      textAlign: 'center',
      marginBottom: verticalScale(20),
    },
    button: {
      backgroundColor: '#4CAF50',
      padding: horizontalScale(10),
      margin: horizontalScale(10),
      borderRadius: horizontalScale(5),
      width: horizontalScale(200),
      alignItems: 'center',
    },
    buttonText: {
      color: 'white',
      fontSize: scaleFontSize(18),
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
      width: horizontalScale(300),
      backgroundColor: 'white',
      padding: horizontalScale(20),
      justifyContent: 'center',
      alignItems: 'center',
    },
    popoverTitle: {
      fontSize: scaleFontSize(20),
      fontWeight: 'bold',
      marginBottom: verticalScale(20),
    },
    gridContainer: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'space-between',
      width: '100%',
      paddingHorizontal: horizontalScale(10),
    },
    gridButton: {
      width: '45%',
      aspectRatio: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#4CAF50',
      margin: horizontalScale(5),
      borderRadius: horizontalScale(10),
    },
    gridButtonText: {
      color: 'white',
      fontSize: scaleFontSize(24),
      fontWeight: 'bold',
    },
  });
};

export default createStyles;
