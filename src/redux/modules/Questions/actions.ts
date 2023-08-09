import { createAction } from '@reduxjs/toolkit';
import { IDifficultyEnum } from 'src/types/questionTypes';

export const GET_QUESTIONS = 'GET_QUESTIONS';

export const getQuestions = createAction(GET_QUESTIONS);

export type getQuestionsActionType = {
  type: typeof getQuestions,
  payload: IDifficultyEnum,
}
