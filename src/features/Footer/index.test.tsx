import React from 'react';
import { render, screen } from '@testing-library/react';
import Footer from './';

test('renders learn react link', () => {
  render(<Footer />);

  expect(screen.getByTestId('footer')).toHaveTextContent(/Alan Mabry/i);
});
