import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ITasksState } from './models';

const getTasksState = createFeatureSelector<ITasksState>('tasks');

export const getTasks = createSelector(getTasksState, (state) => {
  return state.tasks;
});
