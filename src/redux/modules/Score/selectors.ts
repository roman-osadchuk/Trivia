import { createSelector } from '@reduxjs/toolkit';
import { RootState } from 'src/store/rootReducer';

export const scoreSelector = (state: RootState) => state.score;

export const selectScore = createSelector(scoreSelector, ({ score }) => score);
