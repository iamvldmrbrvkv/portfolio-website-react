import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Projects from '../components/Projects';

describe('Projects', () => {
  it('renders projects section', () => {
    render(<Projects />);
    
    expect(screen.getByText('Projects')).toBeInTheDocument();
    expect(screen.getByText(/You can find all of my projects on/)).toBeInTheDocument();
  });

  it('renders main GitHub link', () => {
    render(<Projects />);
    
    const githubLink = screen.getByRole('link', { name: 'GitHub.' });
    expect(githubLink).toBeInTheDocument();
    expect(githubLink).toHaveAttribute('href', 'https://github.com/iamvldmrbrvkv');
    expect(githubLink).toHaveAttribute('target', '_blank');
  });

  it('renders all project titles', () => {
    render(<Projects />);
    
    expect(screen.getByText('Jammming')).toBeInTheDocument();
    expect(screen.getByText('Reddit Client')).toBeInTheDocument();
    expect(screen.getByText('Test App')).toBeInTheDocument();
    expect(screen.getByText('Canvas Drawing App')).toBeInTheDocument();
    expect(screen.getByText('File Uploader Component')).toBeInTheDocument();
  });

  it('renders project links with correct attributes', () => {
    render(<Projects />);
    
    const jammingLink = screen.getByRole('link', { name: 'Jammming' });
    expect(jammingLink).toBeInTheDocument();
    expect(jammingLink).toHaveAttribute('href', 'https://github.com/iamvldmrbrvkv/jammming');
    expect(jammingLink).toHaveAttribute('target', '_blank');
    
    const canvasAppLink = screen.getByRole('link', { name: 'Canvas Drawing App' });
    expect(canvasAppLink).toBeInTheDocument();
    expect(canvasAppLink).toHaveAttribute('href', 'https://zesty-chebakia-2069ac.netlify.app/');
  });
});