import { Action, createReducer, on } from '@ngrx/store';
import { ITask } from 'src/app/modules';
import { loadTasksSuccess, addTaskSuccess } from './tasks.actions';
import { tasksInitialState } from './tasks.state';
import { ITasksState } from './models';
import { ActionSettings } from '@syncfusion/ej2-angular-navigations';

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
    let columns: Array<ITask> = [];

    action.tasks.forEach((task: ITask) => {
      if (!state.tasks.find((elem: ITask) => elem.id === task.id)) {
        columns = [...columns, task];
      }
    });
    return {
      ...state,
      tasks: [...state.tasks, ...columns],
    };
  }),
);

export function tasksReducer(state: ITasksState | undefined, action: Action) {
  return reducer(state, action);
}
