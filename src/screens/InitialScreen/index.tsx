import React, { useState, useEffect } from 'react';
import { ActivityIndicator, View, Text, Image, TextInput, TouchableOpacity, KeyboardAvoidingView, Alert } from 'react-native';
import { getQuestions } from 'src/redux/modules/Questions/actions';
import { selectError, selectIsLoading, selectQuestions } from 'src/redux/modules';
import { useDispatch, useSelector } from 'react-redux';
import { Screen } from 'src/constants/screens';
import { styles } from './styles';
import { IDifficultyEnum } from 'src/types/questionTypes';
import { DismissKeyboardView } from 'src/hoc/DismissKeyboard';
import { Colors } from 'src/constants/colors';
import { IS_IOS } from 'src/utils/metrics';
import GradientButton from 'src/components/GradientButton';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from 'src/types/navigationTypes';

// @ts-ignore
import ArrowDownIcon from 'src/icons/ArrowDownIcon.svg';
// @ts-ignore
import BottomLeftIcon from 'src/icons/BottomLeftIcon.svg';
// @ts-ignore
import DifficultyIcon from 'src/icons/DifficultyIcon.svg';
// @ts-ignore
import AmountIcon from 'src/icons/AmountIcon.svg';
const TriviaLogo = require('src/assets/Trivia.png');
const InitialScreenImage1 = require('src/assets/InitialScreenImage1.png');
const InitialScreenImage2 = require('src/assets/InitialScreenImage2.png');
const InitialScreenImage3 = require('src/assets/InitialScreenImage3.png');
const InitialScreenImage4 = require('src/assets/InitialScreenImage4.png');

type navigationInitialProp = NativeStackNavigationProp<RootStackParamList, Screen.InitialScreen>;

type InitialScreenProps = {
  navigation: navigationInitialProp;
};

export const InitialScreen = ({ navigation }: InitialScreenProps) => {
  const [amount, setAmount] = useState('0');
  const [difficulty, setDifficulty] = useState(IDifficultyEnum.Easy);
  const [difficultyVisible, setDifficultyVisible] = useState(false);
  const apiQuestions = useSelector(selectQuestions);
  const isLoading = useSelector(selectIsLoading);
  const questionsError = useSelector(selectError);
  const dispatch = useDispatch();

  useEffect(() => {
    if (apiQuestions.length && !isLoading) {
      navigation.navigate(Screen.QuestionsScreen, { difficulty });
    }
  }, [apiQuestions, isLoading, navigation]);

  useEffect(() => {
    if (questionsError) {
      Alert.alert('Error', questionsError?.message)
    }
  }, [questionsError])

  const showDifficultyOptions = () => {
    setDifficultyVisible(true);
  }

  const onFocusInput = () => {
    setDifficultyVisible(false);
  }

  const onContinuePress = (): void => {
    dispatch(getQuestions(difficulty as any));
  }

  const chooseDifficulty = (difficulty: IDifficultyEnum): void => {
    setDifficulty(difficulty);
    setDifficultyVisible(false);
  }

  return (
    <>
      <KeyboardAvoidingView
        behavior={'padding'}
        style={styles.keyboardContainer}
        keyboardVerticalOffset={-40}
      >
        <DismissKeyboardView>
          <>
            <View style={styles.screenContainer}>
              <View />

              <View style={styles.inputsContainer}>
                <View style={styles.headerWrapper}>
                  <Text style={styles.headerText}>Welcome to the</Text>
                  <Image style={styles.logoImage} source={TriviaLogo} resizeMode={'contain'} />
                </View>

                <View style={styles.inputWrapper}>
                  <View style={styles.inputLabel}>
                    <DifficultyIcon />
                    <Text style={styles.inputLabelText}>Difficulty</Text>
                  </View>
                  <TouchableOpacity onPress={showDifficultyOptions} style={styles.difficultyContainer}>
                    <View style={styles.difficultyWrapper}>
                      <Text style={styles.regularText}>{difficulty}</Text>
                      <ArrowDownIcon />
                    </View>
                  </TouchableOpacity>
                  {difficultyVisible && (
                    <View style={styles.difficultyOptionsWrapper}>
                      <TouchableOpacity style={styles.difficultyOptionWrapper} onPress={() => chooseDifficulty(IDifficultyEnum.Easy)}>
                        <Text style={styles.difficultyOptionText}>easy</Text>
                      </TouchableOpacity>
                      <TouchableOpacity style={styles.difficultyOptionWrapper} onPress={() => chooseDifficulty(IDifficultyEnum.Hard)}>
                        <Text style={styles.difficultyOptionText}>hard</Text>
                      </TouchableOpacity>
                    </View>
                    )
                  }
                </View>

                <View style={styles.inputWrapper}>
                  <View style={styles.inputLabel}>
                    <AmountIcon />
                    <Text style={styles.inputLabelText}>Amount</Text>
                  </View>
                  <TextInput
                    value={amount}
                    onChangeText={setAmount}
                    style={styles.amountInput}
                    placeholder="Amount"
                    placeholderTextColor={Colors.WHITE}
                    keyboardType={'number-pad'}
                    onFocus={onFocusInput}
                  />
                </View>
              </View>

              <View style={styles.gradientButtonWrapper}>
                <GradientButton title={'TRUE'} onPress={onContinuePress} disabled={isLoading} />
              </View>

            </View>
          </>

        </DismissKeyboardView>
      </KeyboardAvoidingView>

      {
        isLoading && <View style={styles.activityIndicatorContainer}>
          <ActivityIndicator color={Colors.GINGER} size="large" />
        </View>
      }

      <Image style={styles.image1} source={InitialScreenImage1} resizeMode={'contain'} />
      <Image style={styles.image2} source={InitialScreenImage2} resizeMode={'contain'} />
      <Image style={styles.image3} source={InitialScreenImage3} resizeMode={'contain'} />
      <Image style={styles.image4} source={InitialScreenImage4} resizeMode={'contain'} />
    </>
  );
};
