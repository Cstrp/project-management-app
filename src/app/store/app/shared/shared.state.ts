interface SharedState {
  showLoading: boolean;
  errMsg: string;
}

const initialState: SharedState = {
  showLoading: false,
  errMsg: '',
};

export { initialState, SharedState };
