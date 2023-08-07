import { StyleSheet } from 'react-native';
import { Colors } from 'src/constants/colors';

export const styles = StyleSheet.create({
  cardContainer: {
    width: '92%',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerContainer: {
    marginVertical: 10,
  },
  categoryText: {
    fontSize: 31,
    letterSpacing: 38,
    fontWeight: '500',
    color: Colors.PRIMARY_BLUE,
  },
  levelText: {
    fontSize: 13,
    fontWeight: '500',
    letterSpacing: 3,
    color: Colors.PRIMARY_BLUE,
  },
  progressContainer: {
    marginVertical: 10,
  },
  currentQuestion: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  currentQuestionsText: {
    fontWeight: '700',
    fontSize: 18,
    color: Colors.ORANGE
  },
  totalQuestionsText: {
    top: 6,
    fontWeight: '700',
    fontSize: 14,
    color: Colors.WHITE
  },
  progressLineContainer: {
    width: '100%',
    height: 5,
    backgroundColor: Colors.LIGHT_BLUE
  },
  currentLine: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    zIndex: 10,
    backgroundColor: Colors.ORANGE,
  },
  questionContainer: {
    marginVertical: 20,
  },
  questionText: {
    textAlign: 'left',
    fontSize: 25,
    lineHeight: 36,
    fontWeight: '500',
    color: Colors.PRIMARY_BLUE,
  },
  buttonsContainer: {

  },
  trueButton: {
    backgroundColor: Colors.PRIMARY_BLUE,
    borderWidth: 2,
    borderColor: Colors.PRIMARY_BLUE,
    borderRadius: 8,
    marginBottom: 8,
  },
  falseButton: {
    backgroundColor: Colors.WHITE,
    borderWidth: 2,
    borderColor: Colors.PRIMARY_BLUE,
    borderRadius: 8,
  },
  falseText: {
    fontSize: 15,
    fontWeight: '700',
    color: Colors.PRIMARY_BLUE,
  },
  trueText: {
    fontSize: 15,
    fontWeight: '700',
    color: Colors.WHITE,
  },

});
