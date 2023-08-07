import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { updateAnsweredQuestion } from 'src/redux/modules/Questions/actions';
import { IQuestion } from 'src/types/questionTypes';
import { styles } from './styles';
import { useDispatch, useSelector } from 'react-redux';
import { selectQuestions, selectAnsweredQuestions } from 'src/redux';

type DisplayQuestionProps = {
  question: IQuestion;
  index: number;
  length: number;
  key: string;
  onAnswer: () => void;
};

export const DisplayQuestion = ({ question, index, length, key, onAnswer }: DisplayQuestionProps) => {
  const dispatch = useDispatch();

  const checkIfAnswerIsCorrect = (answer: string) => {
    if (question.correct_answer === answer) {
      return true;
    }
    return false;
  }

  const handleOnAnswer = (answer: string) => {
    onAnswer()
    const answeredQuestion = {...question, isUserAnswerCorrect: checkIfAnswerIsCorrect(answer)}
    dispatch(updateAnsweredQuestion(answeredQuestion))
  }

  const currentProgress = (index + 1) / length;

  return (
    <View style={styles.cardContainer} key={key}>
      <View style={styles.headerContainer}>
        <Text style={styles.categoryText}>{question.category}</Text>
        <Text style={styles.levelText}>level 1</Text>
      </View>

      <View style={styles.progressContainer}>
        <View style={styles.currentQuestion}>
          <Text style={styles.currentQuestionsText}>{index + 1}</Text>
          <Text style={styles.totalQuestionsText}>/{length}</Text>
        </View>
        <View style={styles.progressLineContainer}>
          <View style={[styles.currentLine, { width: `${currentProgress * 100}%` }]} />
        </View>
      </View>

      <View style={styles.questionContainer}>
        <Text style={styles.questionText}>{question.question}</Text>
      </View>

      <View style={styles.buttonsContainer}>
        <TouchableOpacity style={styles.trueButton} onPress={() => handleOnAnswer('True')}>
          <Text style={styles.trueText}>TRUE</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.falseButton} onPress={() => handleOnAnswer('False')}>
          <Text style={styles.falseText}>FALSE</Text>
        </TouchableOpacity>
      </View>
    </View>
  )

};

