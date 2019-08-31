export type Transaction = {
  id: string;
  date: string;
  product: string;
  isin: string;
  market: string;
  quantity: number
  rate: number
  localValue: number
  value: number
  exchangeRate: number
  cost: number
  total: number
}
