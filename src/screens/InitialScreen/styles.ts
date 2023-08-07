import { StyleSheet } from 'react-native';
import { DEVICE_HEIGHT } from 'src/utils/metrics';
import { Colors } from 'src/constants/colors';

export const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    height: '100%',
    width: '100%',
    alignItems: 'center',
    backgroundColor: 'blue',
  },
  keyboardContainer: {
    flex: 1,
    height: '100%',
    width: '100%',
    alignItems: 'center',
    backgroundColor: 'blue',
  },

  headerWrapper: {
    marginTop: 40,
    alignSelf: 'center',
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: Colors.WHITE,
  },
  logoImage: {
    width: 300,
    height: 100,
  },

  inputWrapper: {

  },
  inputLabel: {

  },
  inputLabelImage: {

  },
  inputLabelText: {

  },

  difficultyContainer: {

  },
  difficultyWrapper: {

  },
  regularText: {

  },


  amountInput: {

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
