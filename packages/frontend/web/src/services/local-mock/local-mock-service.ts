import axios, { AxiosInstance } from 'axios';
import { Transaction } from '../../types/models/transaction';

const localMockAxios: AxiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_LOCAL_MOCK_API,
});

const localMockService = {
  getTransactions: (): Promise<Transaction[]> => {
    return localMockAxios.get<Transaction[]>('/transactions').then(res => res.data);
  },
};
export default localMockService;
