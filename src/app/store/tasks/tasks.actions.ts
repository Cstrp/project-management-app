import { createAction, props } from '@ngrx/store';
import { ITask } from 'src/app/modules';

export const LOAD_TASKS = '[board page] load tasks';
export const LOAD_TASKS_SUCCESS = '[board page] load tasks success';
export const loadTasks = createAction(LOAD_TASKS, props<{ boardId: string; columnId: string }>());
export const loadTasksSuccess = createAction(LOAD_TASKS_SUCCESS, props<{ tasks: Array<ITask> }>());

export const ADD_TASK_ACTION = '[board page] add task';
export const ADD_TASK_SUCCESS = '[board page] add task success';
export const addTask = createAction(
  ADD_TASK_ACTION,
  props<{ boardId: string; columnId: string; task: ITask; taskOrder?: number }>(),
);
export const addTaskSuccess = createAction(ADD_TASK_SUCCESS, props<{ task: ITask }>());

export const UPDATE_TASK_ACTION = '[board page] update task';
export const UPDATE_TASK_SUCCESS = '[board page] update task success';
export const updateTask = createAction(UPDATE_TASK_ACTION, props<{ taskId: string; task: ITask }>());
export const updateTaskSuccess = createAction(UPDATE_TASK_SUCCESS, props<{ task: ITask }>());

export const DELETE_TASK_ACTION = '[board page] delete task';
export const DELETE_TASK_SUCCESS = '[board page] delete task success';
export const deleteTask = createAction(DELETE_TASK_ACTION, props<{ task: ITask }>());
export const deleteTaskSuccess = createAction(DELETE_TASK_SUCCESS, props<{ id: string }>());
