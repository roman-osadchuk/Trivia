import { createAction } from '@reduxjs/toolkit';

export const UPDATE_SCORE = 'UPDATE_SCORE';

export const updateNewScore = createAction(UPDATE_SCORE);
