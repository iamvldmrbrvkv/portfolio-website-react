import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { DarkModeProvider } from '../context';
import Header from '../components/Header';

describe('Header', () => {
  const mockOnNavigate = vi.fn();

  it('renders navigation links', () => {
    render(
      <DarkModeProvider>
        <Header onNavigate={mockOnNavigate} />
      </DarkModeProvider>
    );
    
    expect(screen.getByText('Vladimir Borovikov')).toBeInTheDocument();
    expect(screen.getByText('About Me')).toBeInTheDocument();
    expect(screen.getByText('Projects')).toBeInTheDocument();
    expect(screen.getByText('Skills')).toBeInTheDocument();
    expect(screen.getByText('Contact')).toBeInTheDocument();
  });

  it('calls onNavigate when navigation links are clicked', () => {
    render(
      <DarkModeProvider>
        <Header onNavigate={mockOnNavigate} />
      </DarkModeProvider>
    );
    
    fireEvent.click(screen.getByText('About Me'));
    expect(mockOnNavigate).toHaveBeenCalledWith('about-me');
    
    fireEvent.click(screen.getByText('Projects'));
    expect(mockOnNavigate).toHaveBeenCalledWith('projects');
  });

  it('renders dark mode toggle button', () => {
    render(
      <DarkModeProvider>
        <Header onNavigate={mockOnNavigate} />
      </DarkModeProvider>
    );
    
    expect(screen.getByLabelText('Toggle dark mode')).toBeInTheDocument();
  });
});