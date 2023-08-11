import React, { useLayoutEffect, useState } from 'react';
import { View, Image, TouchableOpacity } from 'react-native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import type { RouteProp } from '@react-navigation/native';
import DisplayQuestion from 'src/components/DisplayQuestion';
import { clearAllQuestions, selectAnsweredQuestions, selectQuestions } from 'src/redux/modules';
import { RootStackParamList } from 'src/types/navigationTypes';
import { Screen } from 'src/constants/screens';
// @ts-ignore
import BlueCloseIcon from 'src/icons/BlueCloseIcon.svg';
import { useDispatch, useSelector } from 'react-redux';
import { styles } from './styles';
import { IDifficultyEnum, IQuestion } from 'src/types/questionTypes';

const QuestionsScreen1 = require('src/assets/QuestionsScreen1.png');
const QuestionsScreen2 = require('src/assets/QuestionsScreen2.png');
const QuestionsScreen3 = require('src/assets/QuestionsScreen3.png');
const QuestionsScreen4 = require('src/assets/QuestionsScreen4.png');
const QuestionsScreen5 = require('src/assets/QuestionsScreen5.png');

type navigationQuestionsProp = NativeStackNavigationProp<RootStackParamList, Screen.QuestionsScreen>;
type routeQuestionsProp = RouteProp<RootStackParamList, Screen.QuestionsScreen>;

type QuestionsScreenProps = {
  navigation: navigationQuestionsProp;
  route: routeQuestionsProp;
};

export const QuestionsScreen = ({ navigation, route }: QuestionsScreenProps) => {
  const dispatch = useDispatch();
  const { difficulty } = route.params;

  const level = difficulty === IDifficultyEnum.Easy ? 1 : 2;

  const [currentQuestion, setCurrentQuestion] = useState(0)

  const apiQuestions = useSelector(selectQuestions);
  const answeredQuestions = useSelector(selectAnsweredQuestions);

  useLayoutEffect(() => {
    const getCurrentQuestionFromStore = answeredQuestions.reduce((acc, next) => {
      if (next.isUserAnswerCorrect !== undefined) {
        return ++acc
      }
      return acc;
    }, 0)

    if (getCurrentQuestionFromStore) {
      setCurrentQuestion(+getCurrentQuestionFromStore)
    }
  }, []);

  const onAnswer = () => {
    setCurrentQuestion(prevState => ++prevState)

    if (currentQuestion === apiQuestions.length - 1) {
      navigation.navigate(Screen.ResultsScreen);
    }
  }

  const handleGoBack = () => {
    dispatch(clearAllQuestions());
    navigation.goBack();
  };

  return (
    <View style={styles.container}>

      <Image style={styles.image1} source={QuestionsScreen1} resizeMode={'contain'} />
      <Image style={styles.image2} source={QuestionsScreen2} resizeMode={'contain'} />
      <Image style={styles.image3} source={QuestionsScreen3} resizeMode={'contain'} />
      <Image style={styles.image4} source={QuestionsScreen4} resizeMode={'contain'} />
      <Image style={styles.image5} source={QuestionsScreen5} resizeMode={'contain'} />

      <TouchableOpacity style={styles.backButtonContainer} onPress={handleGoBack}>
        <BlueCloseIcon />
      </TouchableOpacity>

      {
        apiQuestions.map((question: IQuestion, index: number) => {
          if (currentQuestion === index) {
            return (
              <DisplayQuestion
                question={question}
                index={index}
                level={level}
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
