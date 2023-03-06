import { render } from '@testing-library/react';
import App from './App';

test('Should exist', () => {
  const app = render(<App />);

  expect(app).toBeDefined();
});
