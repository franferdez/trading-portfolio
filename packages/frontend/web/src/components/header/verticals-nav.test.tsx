import React from 'react';
import VerticalsNav from './verticals-nav';
import 'jest';
import { render, cleanup, queryByTestId } from '@testing-library/react';

afterEach(cleanup);

test('renders verticals', () => {
  const mockVerticals = [
    { id: '0', name: 'iBOOD' },
    { id: '1', name: 'Electronics' },
    { id: '2', name: 'Home & Living' },
    { id: '3', name: 'DIY' },
  ];
  const { getAllByTestId } = render(<VerticalsNav verticals={mockVerticals} />);
  const verticalNames = mockVerticals.map(it => it.name);
  const verticals = getAllByTestId('nav-list-item').map(listItem => listItem.textContent);
  expect(verticals).toEqual(verticalNames);
});

test("doesn't render component if no verticals were passed", () => {
  const { container } = render(<VerticalsNav verticals={{}} />);
  expect(queryByTestId(container, 'nav-list')).toBeNull();
});
