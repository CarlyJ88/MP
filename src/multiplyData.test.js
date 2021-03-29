import multiplyData from './multiplyData';

describe('muliplyData', () => {
  it('multiples the value', () => {
    expect(multiplyData([{ value: 2, multiplier: 2 }, { value: 3, multiplier: 3 }]))
                  .toEqual([{ value: 4, multiplier: 2 }, { value: 9, multiplier: 3 }]);
  })
})