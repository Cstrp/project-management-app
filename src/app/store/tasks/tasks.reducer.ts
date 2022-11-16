import { Action, createReducer, on } from '@ngrx/store';
import { ITask } from 'src/app/modules';
import { loadTasksSuccess, addTaskSuccess } from './tasks.actions';
import { tasksInitialState } from './tasks.state';
import { ITasksState } from './models';

const reducer = createReducer(
  tasksInitialState,
  on(addTaskSuccess, (state, action) => {
    let task = { ...action.task };

    return {
      ...state,
      tasks: [...state.tasks, task],
    };
  }),
  on(loadTasksSuccess, (state, action) => {
    return {
      ...state,
      tasks: action.tasks,
    };
  }),
);

export function tasksReducer(state: ITasksState | undefined, action: Action) {
  return reducer(state, action);
}
