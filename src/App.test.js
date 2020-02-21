import React from 'react';
import { render } from '@testing-library/react';
import AppContainer from './App';

test('renders /machines link', () => {
  const { getByText } = render(<AppContainer />);
  const linkElement = getByText(/machines/i);
  expect(linkElement).toBeInTheDocument();
});
