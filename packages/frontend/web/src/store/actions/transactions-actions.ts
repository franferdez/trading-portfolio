import { PayloadAction, Action } from 'redux-starter-kit';
import services from '../../services/services';
import {
  fetchTransactionsRequest,
  fetchTransactionsSuccess,
  fetchTransactionsFailure,
} from '../reducers/transactions-reducer';
import { Dispatch } from 'redux';

export const fetchMockedTransactions = () => async (dispatch: Dispatch<PayloadAction>): Promise<Action> => {
  dispatch(fetchTransactionsRequest());
  try {
    const verticals = await services.localMock.getTransactions();
    return dispatch(fetchTransactionsSuccess(verticals));
  } catch (e) {
    return dispatch(fetchTransactionsFailure(e.message));
  }
};
