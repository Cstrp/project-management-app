import { Usr } from './models/usr';

interface AuthState {
  user: Usr | null;
}

const initialState: AuthState = { user: null };

export { initialState, AuthState };
