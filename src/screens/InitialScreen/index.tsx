import React, { useCallback, useState, useEffect } from 'react';
import { View, Text, Image, TextInput, TouchableOpacity, KeyboardAvoidingView } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { getQuestions } from 'src/redux/modules/Questions/actions';
import { selectQuestions } from 'src/redux/modules';
import { useDispatch, useSelector } from 'react-redux';
import { PokemonCard } from 'src/components/DisplayQuestion';
// import { IPokemons } from 'src/redux/modules/Questions';
import { Screen } from 'src/constants/screens';
import { styles } from './styles';
import { useNavigation } from '@react-navigation/native';
import { IDifficultyEnum } from 'src/types/questionTypes';
import { DismissKeyboardView } from 'src/hoc/DismissKeyboard';
import { Colors } from 'src/constants/colors';
import { IS_IOS } from 'src/utils/metrics';

const TriviaLogo = require('src/assets/Triva.png');
const InitialScreenImage1 = require('src/assets/InitialScreenImage1.png');
const InitialScreenImage2 = require('src/assets/InitialScreenImage2.png');
const InitialScreenImage3 = require('src/assets/InitialScreenImage3.png');
const InitialScreenImage4 = require('src/assets/InitialScreenImage4.png');

export const InitialScreen: React.FC = () => {
  const [amount, setAmount] = useState(0);
  const [difficulty, setDifficulty] = useState(IDifficultyEnum.Easy);
  const [difficultyVisible, setDifficultyVisible] = useState(false);
  const apiQuestions = useSelector(selectQuestions);
  const dispatch = useDispatch();
  const navigation = useNavigation();

  useEffect(() => {
    fetchQuestions();
  }, []);

  const fetchQuestions = () => {
    try {
      dispatch(getQuestions(difficulty));
    } catch (err) {
      console.log(err);
    }
  };

  console.log('apiQuestions', apiQuestions)

  const showDifficultyOptions = () => {
    setDifficultyVisible(true);
  }

  const hideDifficultyOptions = () => {
    setDifficultyVisible(false);
  }

  const onContinuePress = (): void => {
    navigation.navigate(Screen.QuestionsScreen);
  }

  return (
    <KeyboardAvoidingView
      behavior={IS_IOS ? 'position' : 'height'}
      style={styles.keyboardContainer}
      keyboardVerticalOffset={0}
    >
      <DismissKeyboardView>
        <View style={styles.screenContainer}>

          <Image style={styles.image1} source={InitialScreenImage1} resizeMode={'contain'} />
          <Image style={styles.image2} source={InitialScreenImage2} resizeMode={'contain'} />
          <Image style={styles.image3} source={InitialScreenImage3} resizeMode={'contain'} />
          <Image style={styles.image4} source={InitialScreenImage4} resizeMode={'contain'} />

          <View style={styles.headerWrapper}>
            <Text style={styles.headerText}>Welcome to the</Text>
            <Image style={styles.logoImage} source={TriviaLogo} resizeMode={'contain'} />
          </View>

          <View style={styles.inputWrapper}>
            <View style={styles.inputLabel}>
              <Image style={styles.inputLabelImage} source={TriviaLogo} resizeMode={'contain'} />
              <Text style={styles.inputLabelText}>Difficulty</Text>
            </View>
            <TouchableOpacity onPress={showDifficultyOptions} style={styles.difficultyContainer}>
              <View style={styles.difficultyWrapper}>
                <Text style={styles.regularText}>{difficulty}</Text>
                {/*<Icon></Icon>*/}
              </View>
            </TouchableOpacity>
          </View>

          <View style={styles.inputWrapper}>
            <View style={styles.inputLabel}>
              <Image style={styles.inputLabelImage} source={TriviaLogo} resizeMode={'contain'} />
              <Text style={styles.inputLabelText}>Amount</Text>
            </View>
            <TextInput
              value={amount}
              onChange={setAmount}
              style={styles.amountInput}
              placeholder="Amount"
              keyboardType={'number-pad'}
            />
          </View>

          <TouchableOpacity onPress={onContinuePress}>
            <LinearGradient
              style={styles.gradientContainer}
              colors={[Colors.ORANGE, Colors.RED]}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
            >
              <Text>True</Text>
            </LinearGradient>
          </TouchableOpacity>



        </View>
      </DismissKeyboardView>

    </KeyboardAvoidingView>
  );
};
