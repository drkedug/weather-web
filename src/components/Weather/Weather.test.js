import { render, screen } from '@testing-library/react';
import { Weather } from './Weather';

describe('Test all labels', () => {
  it('should render street label', () => {
    render(<Weather />);
    const streetElement = screen.getByText(/Structure and Street/i);
    expect(streetElement).toBeInTheDocument();
  });

  it('should render City label', () => {
    render(<Weather />);
    const streetElement = screen.getByText(/City/i);
    expect(streetElement).toBeInTheDocument();
  });

  it('should render State label', () => {
    render(<Weather />);
    const streetElement = screen.getByText(/State/i);
    expect(streetElement).toBeInTheDocument();
  });

  it('should render ZIP code label', () => {
    render(<Weather />);
    const streetElement = screen.getByText(/ZIP Code/i);
    expect(streetElement).toBeInTheDocument();
  });
});
