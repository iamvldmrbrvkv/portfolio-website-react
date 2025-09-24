import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import About from '../components/About';

describe('About', () => {
  it('renders about me section', () => {
    render(<About />);
    
    expect(screen.getByText('About Me')).toBeInTheDocument();
    expect(screen.getByText(/Hi, I'm Vladimir Borovikov/)).toBeInTheDocument();
    expect(screen.getByText(/frontend engineer/)).toBeInTheDocument();
  });

  it('renders profile image', () => {
    render(<About />);
    
    const profileImage = screen.getByAltText('Vladimir Borovikov with laptop Memoji');
    expect(profileImage).toBeInTheDocument();
  });

  it('displays correct career information', () => {
    render(<About />);
    
    expect(screen.getByText(/In the past I was a musician and art worker/)).toBeInTheDocument();
    expect(screen.getByText(/watching coding dreams when I'm sleeping/)).toBeInTheDocument();
  });
});