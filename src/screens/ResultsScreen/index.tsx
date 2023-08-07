import React, { useCallback, useEffect, useMemo } from 'react';
import { View, Text, Image, Button, TouchableOpacity, FlatList } from 'react-native';
import type { RouteProp } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { getPokemonInfo } from 'src/redux';
import { selectAnsweredQuestions } from 'src/redux/modules';
import { IPokemonType } from 'src/redux/modules/Questions/slices';
import { RootStackParamList } from 'src/types/navigationTypes';
import { Screen } from 'src/constants/screens';
import { useDispatch, useSelector } from 'react-redux';
import { styles } from './styles';
import WhiteCloseIcon from 'src/icons/WhiteCloseIcon.svg';
import FadeStarIcon from 'src/icons/FadeStarIcon.svg';
import BrightStarIcon from 'src/icons/BrightStarIcon.svg';
import CheckIcon from 'src/icons/CheckIcon.svg';
import BlueCloseIcon from 'src/icons/BlueCloseIcon.svg';
import LinearGradient from 'react-native-linear-gradient';
import { Colors } from 'src/constants/colors';
import { IAnsweredQuestion } from 'src/types/questionTypes';

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


  const goBack = () => {
    navigation.goBack();
  };

  const playAgainPress = () => {
    navigation.navigate(Screen.InitialScreen);
  };



  // const typesString = currentPokemon.types.map((type: IPokemonType) => type?.type.name).join(', ');

  const renderAnsweredQuestion = useCallback(({ item } : { item: IAnsweredQuestion }) => {
    console.log('item', item)
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
      return acc++
    }
    return acc;
  }, 0),[answeredQuestions])

  console.log('numberOfCorrectAnswers', numberOfCorrectAnswers)

  return (
    <View style={styles.container}>

      <Image style={styles.image1} source={ResultsScreen1} resizeMode={'contain'} />
      <Image style={styles.image2} source={ResultsScreen2} resizeMode={'contain'} />
      <Image style={styles.image3} source={ResultsScreen3} resizeMode={'contain'} />
      <Image style={styles.image4} source={ResultsScreen4} resizeMode={'contain'} />
      <Image style={styles.image5} source={ResultsScreen5} resizeMode={'contain'} />
      <Image style={styles.image6} source={ResultsScreen6} resizeMode={'contain'} />

      <TouchableOpacity style={styles.backButtonContainer} onPress={navigation.goBack}>
        <WhiteCloseIcon />
      </TouchableOpacity>

      <View style={styles.mainContainer}>
        <View style={styles.headerWrapper}>
          <Image style={styles.personImage} source={Person} resizeMode={'contain'} />
          <Text style={styles.scoredText}>You scored</Text>
          <Text style={styles.currentQuestionsText}>{numberOfCorrectAnswers}</Text>
          <Text style={styles.totalQuestionsText}>/ {answeredQuestions.length}</Text>
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

        <TouchableOpacity onPress={playAgainPress} style={styles.buttonContainer}>
          <LinearGradient
            style={styles.gradientContainer}
            colors={[Colors.ORANGE, Colors.RED]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
          >
            <Text>PLAY AGAIN</Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>

    </View>
  );
};
