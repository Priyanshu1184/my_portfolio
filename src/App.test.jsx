import { render, screen } from '@testing-library/react';
import App from './App';

test('renders portfolio website', () => {
  render(<App />);
  const headingElement = screen.getByText(/Hi There!/i);
  expect(headingElement).toBeInTheDocument();
});
