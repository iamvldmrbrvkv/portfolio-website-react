import '@testing-library/jest-dom';
import { vi } from 'vitest';

Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: vi.fn().mockImplementation(query => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: vi.fn(),
    removeListener: vi.fn(),
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
    dispatchEvent: vi.fn(),
  })),
});

Object.defineProperty(window, 'scrollTo', {
  value: vi.fn(),
  writable: true,
});

const originalQuerySelector = document.querySelector;
document.querySelector = vi.fn().mockImplementation((selector) => {
  if (selector === 'header') {
    return { offsetHeight: 70 };
  }
  return originalQuerySelector.call(document, selector);
});

const originalGetElementById = document.getElementById;
document.getElementById = vi.fn().mockImplementation((id) => {
  if (id === 'about-me' || id === 'projects' || id === 'skills') {
    return { offsetTop: 500 };
  }
  return originalGetElementById.call(document, id);
});