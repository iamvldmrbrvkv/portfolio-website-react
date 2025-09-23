import { describe, it, expect, beforeEach, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { DarkModeProvider, useDarkMode } from '../context';

// Mock localStorage
const localStorageMock = {
  getItem: vi.fn(),
  setItem: vi.fn(),
  removeItem: vi.fn(),
  clear: vi.fn(),
};

Object.defineProperty(window, 'localStorage', {
  value: localStorageMock,
  writable: true,
});

// Test component that uses the dark mode context
const TestComponent = () => {
  const { isDark, toggleDarkMode } = useDarkMode();
  return (
    <div>
      <p data-testid="dark-mode-status">{isDark ? 'dark' : 'light'}</p>
      <button onClick={toggleDarkMode} data-testid="toggle-button">
        Toggle
      </button>
    </div>
  );
};

describe('DarkModeContext', () => {
  beforeEach(() => {
    vi.clearAllMocks();
    document.documentElement.classList.remove('dark');
  });

  it('initializes with light mode when no localStorage value', () => {
    localStorageMock.getItem.mockReturnValue(null);
    
    render(
      <DarkModeProvider>
        <TestComponent />
      </DarkModeProvider>
    );
    
    expect(screen.getByTestId('dark-mode-status')).toHaveTextContent('light');
  });

  it('initializes with dark mode when localStorage is true', () => {
    localStorageMock.getItem.mockReturnValue('true');
    
    render(
      <DarkModeProvider>
        <TestComponent />
      </DarkModeProvider>
    );
    
    expect(screen.getByTestId('dark-mode-status')).toHaveTextContent('dark');
  });

  it('toggles dark mode and updates localStorage', () => {
    localStorageMock.getItem.mockReturnValue('false');
    
    render(
      <DarkModeProvider>
        <TestComponent />
      </DarkModeProvider>
    );
    
    expect(screen.getByTestId('dark-mode-status')).toHaveTextContent('light');
    
    fireEvent.click(screen.getByTestId('toggle-button'));
    
    expect(screen.getByTestId('dark-mode-status')).toHaveTextContent('dark');
    expect(localStorageMock.setItem).toHaveBeenCalledWith('darkTheme', 'true');
  });
});