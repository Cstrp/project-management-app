import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AuthState } from './models';
import { AUTH_FEATURE_NAME } from './auth.state';

const selectAuth = createFeatureSelector<AuthState>(AUTH_FEATURE_NAME);

export const selectLoading = createSelector(selectAuth, (state) => state.loading);

export const selectLoaded = createSelector(selectAuth, (state) => state.loaded);

export const selectError = createSelector(selectAuth, (state) => state.error);

export const selectAuthData = createSelector(selectAuth, (state) => state.token);

export const selectToken = createSelector(selectAuthData, (state) => state && state.token);

export const selectIsAuth = createSelector(selectToken, (state) => !!state);
