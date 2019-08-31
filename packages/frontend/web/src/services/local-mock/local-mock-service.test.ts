import mockAxios from 'jest-mock-axios';
import localStockService from './local-mock-service';

describe('Features service', ()=>{

  afterEach(() => {
    mockAxios.reset();
  });

  it('getAllFeatures should call axios and get a list of features ', async () => {
    const request = localStockService.getTransactions();
    expect(mockAxios.get).toHaveBeenCalledWith('/verticals' );
    let responseObj = [];
    mockAxios.mockResponse({ data: responseObj});
    const result = await request;
    expect(result).toStrictEqual(responseObj);
  });
})