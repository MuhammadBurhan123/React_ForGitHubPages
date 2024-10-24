import { render, screen } from '@testing-library/react';
import App from './App';
import { act } from 'react';  // Import act from react

test('renders learn react link', () => {
  act(() => {
    render(<App />);
  });
  const linkElement = screen.getByText(/Hello, Tailwind CSS with React!/i);
  expect(linkElement).toBeInTheDocument();
});
