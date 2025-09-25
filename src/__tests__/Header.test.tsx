import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { DarkModeProvider } from '../context';
import Header from '../components/Header';

describe('Header', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

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

  it('renders theme toggle button with emoji', () => {
    renderHeader();
    
    expect(screen.getByRole('button', { name: /theme/i })).toBeInTheDocument();
    expect(screen.getByText('💻')).toBeInTheDocument();
  });

  it('cycles through theme modes when toggle button is clicked', () => {
    renderHeader();
    
    const toggleButton = screen.getByRole('button', { name: /theme/i });
    
    expect(screen.getByText('💻')).toBeInTheDocument();
    
    fireEvent.click(toggleButton);
    expect(screen.getByText('☀️')).toBeInTheDocument();
    
    fireEvent.click(toggleButton);
    expect(screen.getByText('🌙')).toBeInTheDocument();
    
    fireEvent.click(toggleButton);
    expect(screen.getByText('💻')).toBeInTheDocument();
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

  it('handles smooth scroll to sections on home page', () => {
    renderHeader(['/']);
    
    const aboutLink = screen.getByText('About Me');
    fireEvent.click(aboutLink);
    
    expect(window.scrollTo).toHaveBeenCalledWith({
      top: 420,
      behavior: 'smooth'
    });
  });

  it('prevents default anchor behavior and uses custom scroll', () => {
    renderHeader(['/']);
    
    const aboutLink = screen.getByText('About Me');
    const clickEvent = new Event('click', { bubbles: true, cancelable: true });
    
    const preventDefault = vi.spyOn(clickEvent, 'preventDefault');
    
    aboutLink.dispatchEvent(clickEvent);
    
    expect(preventDefault).toHaveBeenCalled();
  });
});