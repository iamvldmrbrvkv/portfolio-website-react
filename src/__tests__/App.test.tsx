import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import App from '../App';

describe('App', () => {
  it('renders the portfolio application', () => {
    render(<App />);
    
    // Check if main sections are present
    expect(screen.getByText('Vladimir Borovikov')).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'About Me' })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'Projects' })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'Skills' })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'Contact' })).toBeInTheDocument();
  });

  it('renders footer with heart', () => {
    render(<App />);
    
    expect(screen.getByText(/From Russia with/)).toBeInTheDocument();
    expect(screen.getByText('♥')).toBeInTheDocument();
  });
});