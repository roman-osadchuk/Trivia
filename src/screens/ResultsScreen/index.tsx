import React, { useCallback, useMemo } from 'react';
import { View, Text, Image, TouchableOpacity, FlatList } from 'react-native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { clearAllQuestions } from 'src/redux';
import { selectAnsweredQuestions } from 'src/redux/modules';
import { RootStackParamList } from 'src/types/navigationTypes';
import { Screen } from 'src/constants/screens';
import { useDispatch, useSelector } from 'react-redux';
import { styles } from './styles';
import { Colors } from 'src/constants/colors';
import { IAnsweredQuestion } from 'src/types/questionTypes';
import GradientButton from 'src/components/GradientButton';
// @ts-ignore
import WhiteCloseIcon from 'src/icons/WhiteCloseIcon.svg';
// @ts-ignore
import FadeStarIcon from 'src/icons/FadeStarIcon.svg';
// @ts-ignore
import BrightStarIcon from 'src/icons/BrightStarIcon.svg';
// @ts-ignore
import CheckIcon from 'src/icons/CheckIcon.svg';
// @ts-ignore
import BlueCloseIcon from 'src/icons/BlueCloseIcon.svg';
const ResultsScreen1 = require('src/assets/ResultsScreen1.png');
const ResultsScreen2 = require('src/assets/ResultsScreen2.png');
const ResultsScreen3 = require('src/assets/ResultsScreen3.png');
const ResultsScreen4 = require('src/assets/ResultsScreen4.png');
const ResultsScreen5 = require('src/assets/ResultsScreen5.png');
const ResultsScreen6 = require('src/assets/ResultsScreen6.png');
const Person = require('src/assets/Person.png');

type navigationResultsProp = NativeStackNavigationProp<RootStackParamList, Screen.ResultsScreen>;

type ResultsScreenProps = {
  navigation: navigationResultsProp;
};

export const ResultsScreen = ({ navigation }: ResultsScreenProps) => {
  const answeredQuestions = useSelector(selectAnsweredQuestions);
  const dispatch = useDispatch();

  const playAgain = () => {
    dispatch(clearAllQuestions());
    navigation.navigate(Screen.InitialScreen);
  };

  const renderAnsweredQuestion = useCallback(({ item } : { item: IAnsweredQuestion }) => {
    const renderBackgroundColor = item.isUserAnswerCorrect ? { backgroundColor: Colors.WHITE } : { backgroundColor: Colors.LIGHT_PINK };
    return (
      <View style={[styles.answerItemContainer, renderBackgroundColor]}>
        <View style={styles.questionTextWrapper}>
          <Text style={styles.questionText}>{item.question}</Text>
        </View>
        <View style={styles.markWrapper}>
          {item.isUserAnswerCorrect ? <CheckIcon /> : <BlueCloseIcon />}
        </View>
      </View>
    )
  }, []);

  const numberOfCorrectAnswers = useMemo(() => answeredQuestions.reduce((acc, next) => {
    if (next.isUserAnswerCorrect) {
      return ++acc
    }
    return acc;
  }, 0), [answeredQuestions]);

  return (
    <View style={styles.container}>

      <Image style={styles.image1} source={ResultsScreen1} resizeMode={'contain'} />
      <Image style={styles.image2} source={ResultsScreen2} resizeMode={'contain'} />
      <Image style={styles.image3} source={ResultsScreen3} resizeMode={'contain'} />
      <Image style={styles.image4} source={ResultsScreen4} resizeMode={'contain'} />
      <Image style={styles.image5} source={ResultsScreen5} resizeMode={'contain'} />
      <Image style={styles.image6} source={ResultsScreen6} resizeMode={'contain'} />

      <TouchableOpacity style={styles.backButtonContainer} onPress={playAgain}>
        <WhiteCloseIcon />
      </TouchableOpacity>

      <View style={styles.mainContainer}>
        <View style={styles.headerWrapper}>
          <View style={styles.personImageWrapper}>
            <Image style={styles.personImage} source={Person} resizeMode={'contain'} />
          </View>
          <Text style={styles.scoredText}>You scored</Text>
          <Text style={styles.currentQuestionsText}>{numberOfCorrectAnswers}</Text>
          <Text style={styles.slash}>/</Text>
          <Text style={styles.totalQuestionsText}>{answeredQuestions.length}</Text>
        </View>

        <View style={styles.starsScoreContainer}>
          {
            answeredQuestions.map((item, index) => {
              if (index < numberOfCorrectAnswers) {
                return (
                  <View style={styles.starWrapper}>
                    <BrightStarIcon />
                  </View>
                )
              }
              return (
                <View style={styles.starWrapper}>
                  <FadeStarIcon />
                </View>
              )
            })
          }
        </View>

        <View style={styles.listContainer}>
          <FlatList
            data={answeredQuestions}
            renderItem={renderAnsweredQuestion}
          />
        </View>

        <View style={styles.buttonWrapper}>
          <GradientButton title={'PLAY AGAIN'} onPress={playAgain} />
        </View>
      </View>

    </View>
  );
};
