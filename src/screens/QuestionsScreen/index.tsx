import React, { useEffect, useState } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import type { RouteProp } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { DisplayQuestion } from 'src/components/DisplayQuestion';
import { selectQuestions } from 'src/redux/modules';
import { IPokemonType } from 'src/redux/modules/Questions/slices';
import { RootStackParamList } from 'src/types/navigationTypes';
import { Screen } from 'src/constants/screens';
import BlueCloseIcon from 'src/icons/BlueCloseIcon.svg';
import { useDispatch, useSelector } from 'react-redux';
import { styles } from './styles';
import { IQuestion } from 'src/types/questionTypes';

const QuestionsScreen1 = require('src/assets/QuestionsScreen1.png');
const QuestionsScreen2 = require('src/assets/QuestionsScreen2.png');
const QuestionsScreen3 = require('src/assets/QuestionsScreen3.png');
const QuestionsScreen4 = require('src/assets/QuestionsScreen4.png');
const QuestionsScreen5 = require('src/assets/QuestionsScreen5.png');
const QuestionsScreen6 = require('src/assets/QuestionsScreen6.png');

type navigationQuestionsProp = NativeStackNavigationProp<RootStackParamList, Screen.QuestionsScreen>;
type routeQuestionsProp = RouteProp<RootStackParamList, Screen.QuestionsScreen>;

type QuestionsScreenProps = {
  navigation: navigationQuestionsProp;
  route: routeQuestionsProp;
};

export const QuestionsScreen = ({ navigation, route }: QuestionsScreenProps) => {
  const [currentQuestion, setCurrentQuestion] = useState(0)

  const apiQuestions = useSelector(selectQuestions);
  const dispatch = useDispatch();

  // useEffect(() => {
  //   fetchCurrentPokemon();
  // }, []);

  // const fetchCurrentPokemon = () => {
  //   dispatch(getPokemonInfo(route.params.pokemonName));
  // };

  const goBack = () => {
    navigation.goBack();
  };

  // const typesString = currentPokemon.types.map((type: IPokemonType) => type?.type.name).join(', ');

  const onAnswer = () => {
    console.log('onAnswer')
    setCurrentQuestion(prevState => prevState++)

    if (currentQuestion === apiQuestions.length - 1) {
      navigation.navigate(Screen.ResultsScreen);
    }
  }

  return (
    <View style={styles.container}>

      <Image style={styles.image1} source={QuestionsScreen1} resizeMode={'contain'} />
      <Image style={styles.image2} source={QuestionsScreen2} resizeMode={'contain'} />
      <Image style={styles.image3} source={QuestionsScreen3} resizeMode={'contain'} />
      <Image style={styles.image4} source={QuestionsScreen4} resizeMode={'contain'} />
      <Image style={styles.image5} source={QuestionsScreen5} resizeMode={'contain'} />
      <Image style={styles.image6} source={QuestionsScreen6} resizeMode={'contain'} />

      <TouchableOpacity style={styles.backButtonContainer} onPress={navigation.goBack}>
        <BlueCloseIcon />
      </TouchableOpacity>

      {
        apiQuestions.map((question: IQuestion, index: number) => {
          if (currentQuestion === index) {
            return (
              <DisplayQuestion
                question={question}
                index={index}
                length={apiQuestions.length}
                key={question.question}
                onAnswer={onAnswer}
              />
            )
          }
          return null;
        })
      }
    </View>
  );
};
