import { createSlice } from 'redux-starter-kit';
import { AsyncReducerState } from '../../types';
import { Transaction } from '../../types/models/transaction';

export type TransactionsDataState = {
  transactions: Transaction[];
};

export type TransactionsState = TransactionsDataState & AsyncReducerState;

const initialState = {
  loading: false,
  loaded: false,
  transactions: [],
  error: null,
};

const { actions, reducer } = createSlice({
  slice: 'transactions',
  initialState,
  reducers: {
    fetchTransactionsRequest(state, action) {
      state.loading = true;
    },
    fetchTransactionsSuccess(state, action) {
      state.loading = false;
      state.loaded = true;
      state.transactions = action.payload;
    },
    fetchTransactionsFailure(state, action) {
      state.loading = false;
      state.loaded = false;
      state.error = action.payload;
    },
  },
});

export const { fetchTransactionsRequest, fetchTransactionsSuccess, fetchTransactionsFailure } = actions;
export const transactionsReducer = reducer;
