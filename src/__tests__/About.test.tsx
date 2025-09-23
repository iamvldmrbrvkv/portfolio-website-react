import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import About from '../components/About';

describe('About', () => {
  it('renders about me section', () => {
    render(<About />);
    
    expect(screen.getByText('About Me')).toBeInTheDocument();
    expect(screen.getByText(/Hi, I'm Vladimir Borovikov/)).toBeInTheDocument();
    expect(screen.getByText(/full-stack engineering student/)).toBeInTheDocument();
  });

  it('renders Codecademy link', () => {
    render(<About />);
    
    const codecademyLink = screen.getByRole('link', { name: /codecademy/i });
    expect(codecademyLink).toBeInTheDocument();
    expect(codecademyLink).toHaveAttribute('href', 'https://www.codecademy.com/');
    expect(codecademyLink).toHaveAttribute('target', '_blank');
  });

  it('renders profile image', () => {
    render(<About />);
    
    const profileImage = screen.getByAltText('Vladimir Borovikov with laptop Memoji');
    expect(profileImage).toBeInTheDocument();
  });
});