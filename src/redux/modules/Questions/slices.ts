import { persistReducer } from 'redux-persist';
import AsyncStorage, { AsyncStorageStatic } from '@react-native-async-storage/async-storage';
import { createSlice, SerializedError } from '@reduxjs/toolkit';
import { IAnsweredQuestion, IQuestion } from 'src/types/questionTypes';

type persistConfigType = {
  key: string,
  storage: AsyncStorageStatic,
  timeout: undefined | number,
}

const persistConfig = <persistConfigType>{
  key: 'questions',
  storage: AsyncStorage,
  timeout: undefined,
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
      state.questions = action.payload;
    },
    updateAnsweredQuestion(state, action) {
      state.answeredQuestions = state.answeredQuestions.concat(action.payload);
    },
    clearAllQuestions(state) {
      state.questions = [];
      state.answeredQuestions = [];
    },
    setQuestionsError(state, action) {
      state.error = action.payload;
    },
    setQuestionsLoading(state, action) {
      state.isLoading = action.payload;
    },
  },
});

export const { putAllQuestions, setQuestionsError, setQuestionsLoading, updateAnsweredQuestion, clearAllQuestions } = actions;
export const questionsReducer = persistReducer(persistConfig, reducer);
