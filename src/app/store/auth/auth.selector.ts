import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AuthState } from './auth.state';

const AUTH_STATE_NAME = 'auth';

const selectAuthState = createFeatureSelector<AuthState>(AUTH_STATE_NAME);

const selectIsAuthenticated = createSelector(selectAuthState, (state) => {
  return !!state.user;
});

const selectId = createSelector(selectAuthState, (state) => {
  return state.user ? state.user.id : null;
});

export { AUTH_STATE_NAME, selectIsAuthenticated, selectId };
