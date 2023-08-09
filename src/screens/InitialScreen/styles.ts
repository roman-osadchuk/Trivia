import { StyleSheet } from 'react-native';
import { DEVICE_HEIGHT, DEVICE_WIDTH } from 'src/utils/metrics';
import { Colors } from 'src/constants/colors';

export const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    width: DEVICE_WIDTH - 48,
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: Colors.PRIMARY_BLUE,
  },
  keyboardContainer: {
    flex: 1,
    width: DEVICE_WIDTH,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.PRIMARY_BLUE,
  },

  headerWrapper: {
    top: 60,
    alignSelf: 'center',
    alignItems: 'center',
  },
  headerText: {
    bottom: -30,
    fontSize: 22,
    fontWeight: '700',
    color: Colors.WHITE,
  },
  logoImage: {
    width: DEVICE_WIDTH - 120,
  },

  inputsContainer: {
    top: -20,
    width: '100%',
  },
  inputWrapper: {
    width: '100%',
    marginBottom: 20,
    zIndex: 10,
  },
  inputLabel: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  inputLabelText: {
    color: Colors.ORANGE,
    fontWeight: '700',
    fontSize: 13,
    left: 12,
  },
  difficultyOptionsWrapper: {
    // position: 'absolute',
    // top: 40,
    // left: 3,
    // right: 3,
    borderRadius: 10,
    zIndex: 100,
  },
  difficultyOptionWrapper: {
    width: '100%',
    padding: 10,
    backgroundColor: Colors.WHITE,
    zIndex: 100,
  },
  difficultyOptionText: {
    color: Colors.GINGER,
    fontSize: 13,
  },


  difficultyContainer: {
    width: '100%',
    padding: 16,
    borderRadius: 10,
    borderColor: Colors.WHITE,
    borderWidth: 1,
  },
  difficultyWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  regularText: {
    color: Colors.WHITE,
    fontSize: 13,
  },
  amountInput: {
    width: '100%',
    padding: 16,
    borderRadius: 10,
    borderColor: Colors.WHITE,
    borderWidth: 1,
    color: Colors.WHITE,
  },
  gradientButtonWrapper: {
    width: '100%',
    alignItems: 'center',
    bottom: 40,
  },
  gradientButtonLayout: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    zIndex: 100,
  },


  image1: {
    position: 'absolute',
    left: 0,
    top: 50,
  },
  image2: {
    position: 'absolute',
    left: 0,
    bottom: 0,
    zIndex: 0,
  },
  image3: {
    position: 'absolute',
    right: 0,
    top: 0,
  },
  image4: {
    position: 'absolute',
    right: 0,
    bottom: 0,
  },

});
