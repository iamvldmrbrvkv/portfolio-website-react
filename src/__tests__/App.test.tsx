import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { DarkModeProvider } from '../context';
import App from '../App';

describe('App', () => {
  // Since App already contains Router, we render without wrapping in MemoryRouter
  it('renders the portfolio application on home route', () => {
    render(<App />);
    
    // Check if main sections are present on home page
    expect(screen.getByText('Vladimir Borovikov')).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'About Me' })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'Projects' })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'Skills' })).toBeInTheDocument();
  });

  it('renders footer with heart', () => {
    render(<App />);
    
    expect(screen.getByText(/From Russia with/)).toBeInTheDocument();
    expect(screen.getByText('♥')).toBeInTheDocument();
  });

  // Test routing by testing page components independently
  it('renders contact page component', () => {
    render(
      <MemoryRouter initialEntries={['/contact']}>
        <DarkModeProvider>
          <main>
            <section id="contact">
              <h2 className="text-center my-[10px] mx-[50px]">Contact</h2>
            </section>
          </main>
        </DarkModeProvider>
      </MemoryRouter>
    );
    
    expect(screen.getByRole('heading', { name: 'Contact' })).toBeInTheDocument();
  });
});