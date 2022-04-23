import { render, screen } from '@testing-library/react';
import user from '@testing-library/user-event';

import App from './App';

test('renders the example page', async () => {
  render(<App />);
  const buttonNode = await screen.findByRole('button');
  expect(buttonNode.innerHTML).toBe('count is: 0');

  await user.click(buttonNode);
  expect(buttonNode.innerHTML).toBe('count is: 1');
});
