import { StyleSheet } from 'react-native';
import { Colors } from 'src/constants/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: '100%',
    backgroundColor: Colors.PRIMARY_BLUE
  },
  backButtonContainer: {
    position: 'absolute',
    top: 40,
    right: 30,
  },
  mainContainer: {
    width: '88%',
    alignSelf: 'center',
    alignItems: 'center',
    marginTop: 40,
  },
  headerWrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 15,
  },
  personImageWrapper: {
    width: 32,
    height: 32,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.WHITE,
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
    fontWeight: '500',
    fontSize: 20,
    color: Colors.ORANGE
  },
  slash: {
    top: 2,
    fontWeight: '500',
    fontSize: 13,
    color: Colors.WHITE
  },
  totalQuestionsText: {
    top: 2,
    fontWeight: '500',
    fontSize: 13,
    color: Colors.WHITE
  },
  starsScoreContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 10,
  },
  starWrapper: {
    marginHorizontal: 2,
  },
  listContainer: {
    paddingBottom: 260,
  },
  answerItemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 8,
    padding: 15,
    borderRadius: 12,
  },
  questionTextWrapper: {
    width: '90%',
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  questionText: {
    textAlign: 'left',
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

  buttonWrapper: {
    width: '100%',
    alignItems: 'center',
    position: 'absolute',
    bottom: 110,
  },

  image1: {
    position: 'absolute',
    right: 0,
    top: 0,
  },
  image2: {
    position: 'absolute',
    left: 0,
    top: 300,
  },
  image3: {
    position: 'absolute',
    right: 0,
    top: 500,
  },
  image4: {
    position: 'absolute',
    left: 0,
    top: 100,
  },
  image5: {
    position: 'absolute',
    right: 0,
    bottom: 0,
  },
  image6: {
    position: 'absolute',
    right: 0,
    top: 100,
  },

});
