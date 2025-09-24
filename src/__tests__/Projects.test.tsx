import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Projects from '../components/Projects';
import { projects } from '../utils/data';

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

  it('renders project links and GitHub links with correct attributes', () => {
    render(<Projects />);

    // Title links should point to the live project URL
    projects.forEach(project => {
      const titleLink = screen.getByRole('link', { name: project.title });
      expect(titleLink).toBeInTheDocument();
      expect(titleLink).toHaveAttribute('href', project.link);
      expect(titleLink).toHaveAttribute('target', '_blank');
      expect(titleLink).toHaveAttribute('rel', 'noopener noreferrer');
    });

    // Each project also has a generic (GitHub) link in the same order
    const githubLinks = screen.getAllByRole('link', { name: '(GitHub)' });
    expect(githubLinks).toHaveLength(projects.length);
    githubLinks.forEach((linkEl, idx) => {
      expect(linkEl).toHaveAttribute('href', projects[idx].github);
      expect(linkEl).toHaveAttribute('target', '_blank');
      expect(linkEl).toHaveAttribute('rel', 'noopener noreferrer');
    });
  });
});