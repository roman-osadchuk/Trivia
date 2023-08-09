import { StyleSheet } from 'react-native';
import { DEVICE_HEIGHT } from 'src/utils/metrics';
import { Colors } from 'src/constants/colors';

export const styles = StyleSheet.create({
  gradientButton: {
    width: '100%',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 100,
    backgroundColor: Colors.GREY
  },
  gradientContainer: {
    width: '100%',
    padding: 20,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 100,
  },
  buttonText: {
    fontSize: 15,
    fontWeight: '700',
  },
});
