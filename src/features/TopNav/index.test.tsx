import React from 'react';
import { render, screen } from '@testing-library/react';
import TopNav from './';

test('renders learn react link', () => {
  render(<TopNav />);

  expect(screen.getByTestId('siteName')).toHaveTextContent(/Pokédex/i);
});
