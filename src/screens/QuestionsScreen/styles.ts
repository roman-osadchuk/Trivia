import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
  },
  backButtonContainer: {
    position: 'absolute',
    top: 40,
    right: 30,
    zIndex: 100,
  },

  image1: {
    position: 'absolute',
    left: 0,
    top: 0,
  },
  image2: {
    position: 'absolute',
    right: 0,
    bottom: 0,
  },
  image3: {
    position: 'absolute',
    right: 0,
    top: 100,
  },
  image4: {
    position: 'absolute',
    left: 0,
    bottom: 0,
  },
  image5: {
    position: 'absolute',
    right: 0,
    bottom: 0,
  },
});
