import { Action, createReducer, on } from '@ngrx/store';
import { initialState, SharedState } from './shared.state';
import { setErrMsg, setLoadSpinner } from './shared.actions';

const _sharedReducer = createReducer(
  initialState,
  on(setLoadSpinner, (state, action) => {
    return {
      ...state,
      showLoading: action.status,
    };
  }),
  on(setErrMsg, (state, action) => {
    return {
      ...state,
      errMsg: action.msg,
    };
  }),
);

const SharedReducer = (state: SharedState | undefined, action: Action) => {
  return _sharedReducer(state, action);
};

export { _sharedReducer, SharedReducer };
