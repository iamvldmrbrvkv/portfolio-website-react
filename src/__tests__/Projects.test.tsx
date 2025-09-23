import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Projects from '../components/Projects';

describe('Projects', () => {
  it('renders projects section', () => {
    render(<Projects />);
    
    expect(screen.getByText('Projects')).toBeInTheDocument();
    expect(screen.getByText(/You can find all of my projects on/)).toBeInTheDocument();
  });

  it('renders GitHub link', () => {
    render(<Projects />);
    
    const githubLink = screen.getByRole('link', { name: /github/i });
    expect(githubLink).toBeInTheDocument();
    expect(githubLink).toHaveAttribute('href', 'https://github.com/iamvldmrbrvkv');
    expect(githubLink).toHaveAttribute('target', '_blank');
  });

  it('renders all project titles', () => {
    render(<Projects />);
    
    expect(screen.getByText('Tea Cozy')).toBeInTheDocument();
    expect(screen.getByText('Bugs Academy')).toBeInTheDocument();
    expect(screen.getByText('Sunday League')).toBeInTheDocument();
    expect(screen.getByText('Mysterious Organism')).toBeInTheDocument();
    expect(screen.getByText('Credit Card Checker')).toBeInTheDocument();
    expect(screen.getByText('Mixed Messages')).toBeInTheDocument();
    expect(screen.getByText('Jammming')).toBeInTheDocument();
    expect(screen.getByText('Reddit Client')).toBeInTheDocument();
  });

  it('renders external links for projects', () => {
    render(<Projects />);
    
    const spotifyApiLink = screen.getByRole('link', { name: /spotify api/i });
    expect(spotifyApiLink).toBeInTheDocument();
    expect(spotifyApiLink).toHaveAttribute('href', 'https://developer.spotify.com/documentation/web-api');
    
    const luhnLink = screen.getByRole('link', { name: /luhn algorithm/i });
    expect(luhnLink).toBeInTheDocument();
    expect(luhnLink).toHaveAttribute('href', 'https://en.wikipedia.org/wiki/Luhn_algorithm');
  });
});