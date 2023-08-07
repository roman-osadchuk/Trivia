import { persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { createSlice } from '@reduxjs/toolkit';

const persistConfig = <any>{
  key: 'score',
  storage: AsyncStorage,
  timeout: null,
};

export interface IScoreState {
  score: number;
}

const initialState: IScoreState = {
  score: 0
};


const { reducer, actions } = createSlice({
  initialState,
  name: 'score',
  reducers: {
    updateScore(state, action) {
      state.score = action.payload;
    },
  },
});

export const { updateScore } = actions;
export const scoreReducer = persistReducer(persistConfig, reducer);
