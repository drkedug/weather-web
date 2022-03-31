import { render, screen } from '@testing-library/react';
import { Weather } from './Weather';

describe('Test all labels', () => {
  it('should render Submit button', () => {
    render(<Weather />);
    const SubmitButton = screen.getByText(/Submit/i);
    expect(SubmitButton).toBeInTheDocument();
  });
});
