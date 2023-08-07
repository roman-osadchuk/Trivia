import { createSelector } from '@reduxjs/toolkit';
import { RootState } from 'src/store/rootReducer';

export const questionsSelector = (state: RootState) => state.questions;

export const selectQuestions = createSelector(questionsSelector, ({ questions }) => questions);
export const selectAnsweredQuestions = createSelector(questionsSelector, ({ answeredQuestions }) => answeredQuestions);
