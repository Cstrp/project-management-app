import { Action, createReducer, on } from '@ngrx/store';
import { ITask } from 'src/app/modules';
import { loadTasksSuccess, addTaskSuccess, updateTaskSuccess, deleteTaskSuccess } from './tasks.actions';
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
    let columns: Array<ITask> = [];
    action.tasks.forEach((task: ITask) => {
      if (!state.tasks.find((elem: ITask) => elem.id === task.id)) {
        columns = [...columns, task];
      }
    });
    let result = [...new Set([...state.tasks, ...columns])];
    return {
      ...state,
      tasks: result,
    };
  }),
  on(updateTaskSuccess, (state, action) => {
    const updatedTasks: ITask[] = state.tasks.map((task: ITask) => {
      return action.task.id === task.id ? action.task : task;
    });

    return {
      ...state,
      tasks: updatedTasks,
    };
  }),
  on(deleteTaskSuccess, (state, action) => {
    const updatedTasks: ITask[] = state.tasks.filter((task) => {
      return task.id !== action.id;
    });

    return {
      ...state,
      tasks: updatedTasks,
    };
  }),
  on(updateTaskSuccess, (state, action) => {
    const updatedTasks: ITask[] = state.tasks.map((task: ITask) => {
      return action.task.id === task.id ? action.task : task;
    });

    return {
      ...state,
      tasks: updatedTasks,
    };
  }),
  on(deleteTaskSuccess, (state, action) => {
    const updatedTasks: ITask[] = state.tasks.filter((task) => {
      return task.id !== action.id;
    });

    return {
      ...state,
      tasks: updatedTasks,
    };
  }),
);

export function tasksReducer(state: ITasksState | undefined, action: Action) {
  return reducer(state, action);
}
