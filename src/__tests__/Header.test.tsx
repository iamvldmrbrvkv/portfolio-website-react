import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { DarkModeProvider } from '../context';
import Header from '../components/Header';

describe('Header', () => {
  const renderHeader = (initialEntries: string[] = ['/']) => {
    return render(
      <MemoryRouter initialEntries={initialEntries}>
        <DarkModeProvider>
          <Header />
        </DarkModeProvider>
      </MemoryRouter>
    );
  };

  it('renders navigation links', () => {
    renderHeader();
    
    expect(screen.getByText('Vladimir Borovikov')).toBeInTheDocument();
    expect(screen.getByText('About Me')).toBeInTheDocument();
    expect(screen.getByText('Projects')).toBeInTheDocument();
    expect(screen.getByText('Skills')).toBeInTheDocument();
    expect(screen.getByText('Contact')).toBeInTheDocument();
  });

  it('renders Contact as link to /contact route', () => {
    renderHeader();
    
    const contactLink = screen.getByRole('link', { name: 'Contact' });
    expect(contactLink).toHaveAttribute('href', '/contact');
  });

  it('renders dark mode toggle button', () => {
    renderHeader();
    
    expect(screen.getByLabelText('Toggle dark mode')).toBeInTheDocument();
  });

  it('renders navigation for home page with scroll anchors', () => {
    renderHeader(['/']);
    
    const aboutLink = screen.getByText('About Me');
    expect(aboutLink).toHaveAttribute('href', '#about-me');
  });

  it('renders navigation for contact page with home links', () => {
    renderHeader(['/contact']);
    
    const aboutLink = screen.getByRole('link', { name: 'About Me' });
    expect(aboutLink).toHaveAttribute('href', '/#about-me');
  });
});