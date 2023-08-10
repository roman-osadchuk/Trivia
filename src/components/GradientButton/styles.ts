import { StyleSheet } from 'react-native';
import { Colors } from 'src/constants/colors';

export const styles = StyleSheet.create({
  gradientButton: {
    width: '100%',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 100,
    backgroundColor: Colors.GREY,
    shadowColor: Colors.INTENSE_RED,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 1,
    shadowRadius: 1,
  },
  gradientContainer: {
    width: '100%',
    padding: 25,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 100,
  },
  buttonText: {
    fontSize: 15,
    fontWeight: '700',
    zIndex: 100,
  },
});
