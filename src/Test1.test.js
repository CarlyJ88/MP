import React from 'react';
import Test1 from './Test1';
import { render, fireEvent } from '@testing-library/react';

jest.mock('./multiplyData');
import multiplyData from './multiplyData';

describe('Test1', () => {
  it('multiples the value once', () => {
    multiplyData.mockReturnValueOnce([{ value: 4, multiplier: 2 }, { value: 9, multiplier: 3 }]);
    const { getByText } = render(<Test1 />);

    fireEvent.click(getByText('Run'))

    expect(getByText('4 * 2')).toBeDefined();
    expect(getByText('9 * 3')).toBeDefined();
  })
})