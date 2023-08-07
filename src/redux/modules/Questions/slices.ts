import { persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { createSlice, SerializedError } from '@reduxjs/toolkit';
import { IAnsweredQuestion, IQuestion, IQuestionResponse } from 'src/types/questionTypes';

const persistConfig = <any>{
  key: 'questions',
  storage: AsyncStorage,
  timeout: null,
};

export interface IQuestionsState {
  questions: IQuestion[];
  answeredQuestions: IAnsweredQuestion[];
  error: SerializedError | null;
  isLoading: boolean;
}

const initialState: IQuestionsState = {
  questions: [],
  answeredQuestions: [],
  error: null,
  isLoading: false,
};



const { reducer, actions } = createSlice({
  initialState,
  name: 'questions',
  reducers: {
    putAllQuestions(state, action) {
      console.log('action', action)
      state.questions = action.payload;
    },
    updateAnsweredQuestion(state, action) {
      console.log('updateAnsweredQuestion - action', action)
      console.log('updateAnsweredQuestion - state', state)
      state.answeredQuestions = [...state.answeredQuestions, ...action.payload];
    },
    setQuestionsError(state, action) {
      state.error = action.payload;
    },
    setQuestionsLoading(state, action) {
      state.isLoading = action.payload;
    },
  },
});

export const { putAllQuestions, setQuestionsError, setQuestionsLoading } = actions;
export const questionsReducer = persistReducer(persistConfig, reducer);
