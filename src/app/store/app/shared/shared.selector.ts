import { createFeatureSelector, createSelector } from '@ngrx/store';
import { SharedState } from './shared.state';

const SHARED_STATE_NAME = 'shared';

const selectSharedState = createFeatureSelector<SharedState>(SHARED_STATE_NAME);

const selectLoading = createSelector(selectSharedState, (state) => {
  return state.showLoading;
});

const selectErrMsg = createSelector(selectSharedState, (state) => {
  return state.errMsg;
});

export { SHARED_STATE_NAME, selectLoading, selectErrMsg };
