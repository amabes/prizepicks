import React from 'react';
import { render, screen } from '@testing-library/react';
import TopNav from '.';

test('renders TopNav and has correct site name', () => {
  render(<TopNav />);
  const element = screen.getByTestId('siteName');
  expect(element).toBeInTheDocument();
  expect(element).toHaveTextContent(/Pokédex/i);
});
