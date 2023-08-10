import { Screen } from '../constants/screens';
import { IDifficultyEnum } from 'src/types/questionTypes';

export type RootStackParamList = {
  [Screen.InitialScreen]: undefined;
  [Screen.QuestionsScreen]: { difficulty: IDifficultyEnum };
  [Screen.ResultsScreen]: undefined;
};
