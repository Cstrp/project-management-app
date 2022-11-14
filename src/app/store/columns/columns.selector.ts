import { createFeatureSelector, createSelector } from '@ngrx/store';
import { IColumnsState } from './models';

const getColumnsState = createFeatureSelector<IColumnsState>('columns');

export const getColumns = createSelector(getColumnsState, (state) => {
  return state.columns;
});
