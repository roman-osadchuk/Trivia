import { StyleSheet } from 'react-native';
import { Colors } from 'src/constants/colors';

export const styles = StyleSheet.create({
  cardContainer: {
    width: '88%',
    height: '100%',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerContainer: {
    marginVertical: 10,
    alignItems: 'center',
  },
  categoryText: {
    fontSize: 31,
    fontWeight: '700',
    color: Colors.PRIMARY_BLUE,
  },
  levelText: {
    marginTop: 7,
    fontSize: 13,
    fontWeight: '500',
    letterSpacing: 6,
    color: Colors.PRIMARY_BLUE,
  },
  progressContainer: {
    width: '100%',
    marginVertical: 10,
  },
  currentQuestion: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  currentQuestionsText: {
    fontWeight: '700',
    fontSize: 18,
    color: Colors.GINGER
  },
  slash: {
    top: 2,
    fontWeight: '700',
    fontSize: 18,
    color: Colors.PRIMARY_BLUE
  },
  totalQuestionsText: {
    top: 2,
    fontWeight: '700',
    fontSize: 14,
    color: Colors.PRIMARY_BLUE
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
    backgroundColor: Colors.GINGER,
  },
  questionContainer: {
    alignSelf: 'flex-start',
    width: '80%',
    marginVertical: 20,
  },
  questionText: {
    textAlign: 'left',
    fontSize: 25,
    lineHeight: 42,
    fontWeight: '400',
    color: Colors.PRIMARY_BLUE,
  },
  buttonsContainer: {
    width: '100%',
  },
  trueButton: {
    paddingVertical: 20,
    alignItems: 'center',
    backgroundColor: Colors.PRIMARY_BLUE,
    borderWidth: 2,
    borderColor: Colors.PRIMARY_BLUE,
    borderRadius: 12,
    marginBottom: 8,
  },
  falseButton: {
    paddingVertical: 20,
    alignItems: 'center',
    backgroundColor: Colors.WHITE,
    borderWidth: 2,
    borderColor: Colors.PRIMARY_BLUE,
    borderRadius: 12,
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
