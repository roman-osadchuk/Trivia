import { combineReducers } from '@reduxjs/toolkit';
import { questionsReducer } from 'src/redux/modules/Questions/slices';
import { scoreReducer } from 'src/redux/modules/Score/slices';

const rootCombineReducer = combineReducers({
  questions: questionsReducer,
  score: scoreReducer,
});

export const rootReducer = (state: any, action: any) => {
  return rootCombineReducer(state, action);
};

export type RootState = ReturnType<typeof rootReducer>;
