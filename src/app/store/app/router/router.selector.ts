import { RouterStateUrl } from './custom-serializer';
import { RouterReducerState } from '@ngrx/router-store';
import { createFeatureSelector, createSelector } from '@ngrx/store';

const selectRouterState = createFeatureSelector<RouterReducerState<RouterStateUrl>>('router');

const selectCurrentRoute = createSelector(selectRouterState, (router) => {
  return router.state;
});

export { selectRouterState, selectCurrentRoute };
