import { createAction } from '@reduxjs/toolkit';
import { IDifficultyEnum } from 'src/types/questionTypes';

export const GET_QUESTIONS = 'GET_QUESTIONS';

export const getQuestions = createAction<IDifficultyEnum>(GET_QUESTIONS);

export type getQuestionsActionType = {
  type: typeof GET_QUESTIONS,
  payload: IDifficultyEnum,
}
