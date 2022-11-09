import { createFeatureSelector, createSelector } from '@ngrx/store';
import { IBoard } from 'src/app/modules';

import { IBoardsState } from './models';

const getBoardsState = createFeatureSelector<IBoardsState>('boards');

export const getBoards = createSelector(getBoardsState, (state) => {
  return state.boards;
});

export const getBoardById = createSelector(
  getBoardsState,
  (state: { boards: { [x: string]: any } }, props: { id: string }) => {
    const board = state.boards['find']((board: IBoard) => board.id === props.id);

    return board;
  },
);
