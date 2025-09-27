import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { DarkModeProvider } from "../context";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Home from "../pages/Home";
import ContactPage from "../pages/Contact";

describe("App", () => {
  it("renders the portfolio application on home route", () => {
    render(
      <MemoryRouter initialEntries={["/"]}>
        <DarkModeProvider>
          <div className="min-h-screen bg-white font-mono text-black dark:bg-gray-800 dark:text-gray-100">
            <Header />
            <Home />
            <Footer />
          </div>
        </DarkModeProvider>
      </MemoryRouter>,
    );

    // Check if main sections are present on home page
    expect(screen.getByText("Vladimir Borovikov")).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: "About Me" }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: "Projects" }),
    ).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "Skills" })).toBeInTheDocument();
  });

  it("renders footer with heart", () => {
    render(
      <MemoryRouter initialEntries={["/"]}>
        <DarkModeProvider>
          <div className="min-h-screen bg-white font-mono text-black dark:bg-gray-800 dark:text-gray-100">
            <Header />
            <Home />
            <Footer />
          </div>
        </DarkModeProvider>
      </MemoryRouter>,
    );

    expect(screen.getByText(/From Russia with/)).toBeInTheDocument();
    expect(screen.getByText("♥")).toBeInTheDocument();
  });

  it("renders contact page component", () => {
    render(
      <MemoryRouter initialEntries={["/contact"]}>
        <DarkModeProvider>
          <div className="min-h-screen bg-white font-mono text-black dark:bg-gray-800 dark:text-gray-100">
            <Header />
            <ContactPage />
            <Footer />
          </div>
        </DarkModeProvider>
      </MemoryRouter>,
    );

    expect(
      screen.getByRole("heading", { name: "Contact" }),
    ).toBeInTheDocument();
  });
});
