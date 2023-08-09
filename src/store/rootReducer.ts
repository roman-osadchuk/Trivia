import { combineReducers } from '@reduxjs/toolkit';
import { questionsReducer } from 'src/redux/modules/Questions/slices';

const rootCombineReducer = combineReducers({
  questions: questionsReducer,
});

export const rootReducer = (state: any, action: any) => {
  return rootCombineReducer(state, action);
};

export type RootState = ReturnType<typeof rootReducer>;
