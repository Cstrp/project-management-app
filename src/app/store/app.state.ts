import { SHARED_STATE_NAME } from './app/shared/shared.selector';
import { SharedState } from './app/shared/shared.state';
import { AUTH_STATE_NAME } from './auth/auth.selector';
import { AuthState } from './auth/auth.state';
import { routerReducer, RouterReducerState } from '@ngrx/router-store';
import { SharedReducer } from './app/shared/shared.reducer';
import { AuthReducer } from './auth/auth.reducer';

interface AppState {
  [SHARED_STATE_NAME]: SharedState;
  [AUTH_STATE_NAME]: AuthState;
  router: RouterReducerState;
}

const appReducer = {
  [SHARED_STATE_NAME]: SharedReducer,
  [AUTH_STATE_NAME]: AuthReducer,
  router: routerReducer,
};

export { AppState, appReducer };
