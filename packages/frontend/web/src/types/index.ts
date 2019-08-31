export type KeyValue<T, U> = {
  key: T;
  value: U;
};

export type AsyncReducerState = {
  loading: boolean;
  loaded: boolean;
  error: any; // TODO: define error type
};
