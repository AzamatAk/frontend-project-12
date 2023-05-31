/* eslint-disable functional/no-expression-statements */
import { render, screen } from '@testing-library/react';
import { test, expect } from '@playwright/test';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
