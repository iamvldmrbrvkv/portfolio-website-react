import { describe, it, expect, beforeEach, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { DarkModeProvider, useDarkMode } from '../context';

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

const TestComponent = () => {
  const { isDark, themeMode, toggleThemeMode } = useDarkMode();
  return (
    <div>
      <p data-testid="dark-mode-status">{isDark ? 'dark' : 'light'}</p>
      <p data-testid="theme-mode">{themeMode}</p>
      <button onClick={toggleThemeMode} data-testid="toggle-button">
        Toggle Theme
      </button>
    </div>
  );
};

describe('DarkModeContext', () => {
  beforeEach(() => {
    vi.clearAllMocks();
    document.documentElement.classList.remove('dark');
    
    vi.mocked(window.matchMedia).mockReturnValue({
      matches: false,
      media: '',
      addEventListener: vi.fn(),
      removeEventListener: vi.fn(),
      onchange: null,
      addListener: vi.fn(),
      removeListener: vi.fn(),
      dispatchEvent: vi.fn(),
    });
  });

  it('initializes with system mode when no localStorage value', () => {
    localStorageMock.getItem.mockReturnValue(null);
    
    render(
      <DarkModeProvider>
        <TestComponent />
      </DarkModeProvider>
    );
    
    expect(screen.getByTestId('theme-mode')).toHaveTextContent('system');
    expect(screen.getByTestId('dark-mode-status')).toHaveTextContent('light'); // system returns light
  });

  it('initializes with saved theme mode from localStorage', () => {
    localStorageMock.getItem.mockReturnValue('dark');
    
    render(
      <DarkModeProvider>
        <TestComponent />
      </DarkModeProvider>
    );
    
    expect(screen.getByTestId('theme-mode')).toHaveTextContent('dark');
    expect(screen.getByTestId('dark-mode-status')).toHaveTextContent('dark');
  });

  it('cycles through theme modes: light → dark → system → light', () => {
    localStorageMock.getItem.mockReturnValue('light');
    
    render(
      <DarkModeProvider>
        <TestComponent />
      </DarkModeProvider>
    );
    
    expect(screen.getByTestId('theme-mode')).toHaveTextContent('light');
    
    fireEvent.click(screen.getByTestId('toggle-button'));
    expect(screen.getByTestId('theme-mode')).toHaveTextContent('dark');
    expect(localStorageMock.setItem).toHaveBeenCalledWith('themeMode', 'dark');
    
    fireEvent.click(screen.getByTestId('toggle-button'));
    expect(screen.getByTestId('theme-mode')).toHaveTextContent('system');
    expect(localStorageMock.setItem).toHaveBeenCalledWith('themeMode', 'system');
    
    fireEvent.click(screen.getByTestId('toggle-button'));
    expect(screen.getByTestId('theme-mode')).toHaveTextContent('light');
    expect(localStorageMock.setItem).toHaveBeenCalledWith('themeMode', 'light');
  });

  it('follows system theme when in system mode', () => {
    vi.mocked(window.matchMedia).mockReturnValue({
      matches: true,
      media: '',
      addEventListener: vi.fn(),
      removeEventListener: vi.fn(),
      onchange: null,
      addListener: vi.fn(),
      removeListener: vi.fn(),
      dispatchEvent: vi.fn(),
    });
    
    localStorageMock.getItem.mockReturnValue('system');
    
    render(
      <DarkModeProvider>
        <TestComponent />
      </DarkModeProvider>
    );
    
    expect(screen.getByTestId('theme-mode')).toHaveTextContent('system');
    expect(screen.getByTestId('dark-mode-status')).toHaveTextContent('dark'); // follows system
  });

  it('applies dark class to documentElement when dark mode is active', () => {
    localStorageMock.getItem.mockReturnValue('dark');
    
    render(
      <DarkModeProvider>
        <TestComponent />
      </DarkModeProvider>
    );
    
    expect(document.documentElement.classList.contains('dark')).toBe(true);
  });
});