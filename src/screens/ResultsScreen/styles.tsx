import { StyleSheet } from 'react-native';
import { Colors } from 'src/constants/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: '100%',
    backgroundColor: Colors.PRIMARY_BLUE
  },
  backButtonContainer: {
    position: 'absolute',
    top: 30,
    right: 30,
  },
  mainContainer: {
    width: '92%',
    alignSelf: 'center',
    alignItems: 'center',
  },
  headerWrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  personImage: {
    width: 32,
    height: 32,
  },
  scoredText: {
    paddingHorizontal: 16,
    fontWeight: '700',
    fontSize: 18,
    color: Colors.WHITE
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
  starsScoreContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  starWrapper: {
    marginHorizontal: 2,
  },
  listContainer: {
    height: '100%',
    paddingBottom: 120,
  },
  answerItemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
  },
  questionTextWrapper: {
    width: '90%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  questionText: {
    fontSize: 12,
    lineHeight: 16,
    fontWeight: '500',
    color: Colors.PRIMARY_BLUE,
  },
  markWrapper: {
    width: '10%',
    justifyContent: 'center',
    alignItems: 'center',
  },

  buttonContainer: {
    width: '100%',
    paddingVertical: 20,
    borderRadius: 12,
  },
  gradientContainer: {
    width: '100%',
    height: '100%'
  },

  image1: {
    position: 'absolute',
    left: 0,
    top: 0,
  },
  image2: {
    position: 'absolute',
    left: 0,
    top: 100,
  },
  image3: {
    position: 'absolute',
    left: 0,
    top: 300,
  },
  image4: {
    position: 'absolute',
    right: 0,
    top: 0,
  },
  image5: {
    position: 'absolute',
    right: 0,
    top: 100,
  },
  image6: {
    position: 'absolute',
    right: 0,
    top: 300,
  },

});
