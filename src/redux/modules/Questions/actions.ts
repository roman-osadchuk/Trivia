import { createAction } from '@reduxjs/toolkit';
import { IDifficultyEnum } from 'src/types/questionTypes';

export const GET_QUESTIONS = 'GET_QUESTIONS';
export const UPDATE_ANSWERED_QUESTION = 'UPDATE_ANSWERED_QUESTION';

export const getQuestions = createAction(GET_QUESTIONS);
export const updateAnsweredQuestion = createAction(UPDATE_ANSWERED_QUESTION);

export type getQuestionsActionType = {
  type: typeof getQuestions,
  payload: IDifficultyEnum,
}
