import { combineReducers, CombinedState, Reducer } from '@reduxjs/toolkit';
import { questionsReducer } from 'src/redux/modules/Questions/slices';
import { actionType, rootReducerType } from 'src/types/storeTypes';

const rootCombineReducer = combineReducers({
  questions: questionsReducer,
});

export const rootReducer =
  (state: CombinedState<rootReducerType>, action: actionType) => {
  return rootCombineReducer(state, action);
};

export type RootState = ReturnType<typeof rootReducer>;
