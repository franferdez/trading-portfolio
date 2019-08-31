import { configureStore } from 'redux-starter-kit';
import { transactionsReducer, TransactionsState } from './reducers/transactions-reducer';

export type ReduxState = {
  verticals: TransactionsState;
};

export type InitialState = {} | undefined;

const exampleInitialState = {};

export const initializeStore = (preloadedState = exampleInitialState) => {
  return configureStore({
    reducer: {
      transactions: transactionsReducer,
    },
    preloadedState,
  });
};
