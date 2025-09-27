# Vladimir Borovikov - Portfolio Website (React)

A modern, responsive portfolio website built with React, TypeScript, and Tailwind CSS, showcasing Vladimir Borovikov's skills as a frontend engineer and his journey from musician to software engineer.

![Portfolio Screenshot](https://img.shields.io/badge/React-19.1.1-blue) ![TypeScript](https://img.shields.io/badge/TypeScript-5.8.3-blue) ![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.1.13-blue) ![Vite](https://img.shields.io/badge/Vite-7.1.7-purple) ![Tests](https://img.shields.io/badge/Tests-Vitest-green)

## 🚀 Features

- **Responsive Design**: Optimized for mobile, tablet, and desktop viewing with dynamic header height calculation
- **Advanced Dark Mode**: Three-position theme system (Light/Dark/System) with emoji icons and automatic system detection
- **Modern Tech Stack**: React 19, TypeScript, Tailwind CSS v4, and Vite
- **Single Page Application**: Smooth navigation with React Router DOM and anchor scroll optimization
- **Accessible**: ARIA labels, semantic HTML, and keyboard navigation
- **Performance Optimized**: Fast loading with Vite build optimization
- **Comprehensive Testing**: Full test suite with Vitest and React Testing Library

## 🛠️ Technologies Used

### Frontend

- **React 19.1.1** - Modern React with latest features
- **TypeScript 5.8.3** - Type-safe JavaScript
- **Tailwind CSS 4.1.13** - Utility-first CSS framework
- **React Router DOM 7.9.1** - Client-side routing

### Build & Development Tools

- **Vite 7.1.7** - Fast build tool and dev server
- **@vitejs/plugin-react 5.0.3** - React plugin for Vite
- **@tailwindcss/vite 4.1.13** - Native Tailwind CSS integration for Vite
- **ESLint 9.36.0** - Code linting with TypeScript support
- **TypeScript ESLint 8.44.0** - ESLint rules for TypeScript

### Testing

- **Vitest 3.2.4** - Fast unit testing framework
- **React Testing Library 16.3.0** - Component testing utilities
- **@testing-library/jest-dom 6.8.0** - Additional DOM matchers
- **@testing-library/user-event 14.6.1** - User interaction utilities
- **jsdom 27.0.0** - DOM environment for testing

## 📦 Installation

```bash
# Clone the repository
git clone https://github.com/iamvldmrbrvkv/portfolio-website-react.git

# Navigate to project directory
cd portfolio-website-react

# Install dependencies
npm install
```

## 🏃‍♂️ Running the Project

### Development

```bash
# Start development server with hot reload
npm run dev
```

The application will be available at `http://localhost:5173`

### Production Build

```bash
# Build for production
npm run build

# Preview production build locally
npm run preview
```

### Testing

```bash
# Run tests in watch mode
npm run test

# Run tests once (CI mode)
npm run test:run

# Run tests with UI interface
npm run test:ui
```

### Linting

```bash
# Lint code with ESLint
npm run lint
```

## 🏗️ Project Structure

```
src/
├── components/           # Reusable React components
│   ├── Header.tsx       # Navigation and dark mode toggle
│   ├── About.tsx        # Personal introduction
│   ├── Projects.tsx     # Portfolio showcase
│   ├── Skills.tsx       # Technology skills
│   ├── Contact.tsx      # Contact information
│   └── Footer.tsx       # Footer component
├── pages/               # Route components
│   ├── Home.tsx         # Main portfolio page
│   └── Contact.tsx      # Contact page
├── context/             # React Context providers and hooks
│   ├── DarkModeContext.ts    # Theme context definition with TypeScript types
│   ├── DarkModeProvider.tsx  # Three-position theme provider with system detection
│   ├── useDarkMode.ts        # Custom hook for theme state management
│   └── index.ts              # Barrel exports for clean imports
├── assets/              # Static assets
│   └── images/          # Images, logos, icons
├── utils/               # Utility functions and data
│   └── data.ts          # Projects, skills, and contact data
├── types/               # TypeScript type definitions
├── __tests__/           # Test files
├── App.tsx              # Main application component
├── main.tsx             # Application entry point
└── index.css            # Global styles and Tailwind imports
```

## 🎨 Advanced Theme System

The portfolio features a comprehensive three-position theme system:

### Theme Modes

- **☀️ Light Mode**: Forced light theme regardless of system preferences
- **🌙 Dark Mode**: Forced dark theme regardless of system preferences
- **💻 System Mode**: Automatically follows system `prefers-color-scheme` setting

### Features

- **Cycling Toggle**: Single button cycles through all three modes
- **Emoji Icons**: Visual indicators (☀️🌙💻) show current theme state
- **System Detection**: Real-time response to system theme changes
- **Persistence**: Theme preference saved in localStorage as `themeMode`
- **Default**: Starts with system theme for familiar user experience

### Technical Implementation

- **Tailwind CSS v4**: Uses `dark:` prefixes with class-based strategy
- **CSS Custom Properties**: Dynamic `--header-height` variable for responsive layout
- **React Context**: Centralized theme state management
- **Icon Adaptation**: Skills and contact icons use `dark:invert` for proper contrast

## 📱 Responsive Design & Navigation

Built with mobile-first approach and intelligent layout adaptation:

### Breakpoint System

- **Mobile**: Optimized layout with dynamic header height for wrapped navigation
- **Tablet**: Intermediate layouts with proper spacing and touch-friendly elements
- **Desktop**: Full-featured layout with single-row navigation

### Smart Anchor Navigation

- **Dynamic Offset**: Header height calculated in real-time for accurate scroll positioning
- **Smooth Scrolling**: Custom JavaScript scroll with proper offset calculation
- **CSS Fallback**: `scroll-margin-top` using CSS custom properties for direct anchor links
- **Responsive Heights**: Automatic adjustment for wrapped header elements on mobile

### Navigation Features

- **Anchor Links**: Smooth scrolling to sections with header offset compensation
- **Route Awareness**: Different navigation behavior for home vs other pages
- **Touch Optimized**: Proper touch targets and spacing for mobile devices

## 🧪 Testing Strategy

Comprehensive test coverage for all major functionality:

### Test Coverage

- **Component Testing**: All major components with user interaction simulation
- **Theme System Testing**: Three-position theme switching with localStorage persistence
- **Navigation Testing**: Anchor scrolling with dynamic header height calculation
- **System Integration**: `matchMedia` API testing for system theme detection
- **Accessibility Testing**: ARIA labels, semantic HTML, and keyboard navigation
- **Routing Testing**: React Router navigation and URL handling

### Testing Tools

- **Vitest 3.2.4**: Fast unit testing with jsdom environment
- **React Testing Library 16.3.0**: Component testing with user-centric queries
- **Custom Mocks**: Window APIs (`matchMedia`, `scrollTo`, `localStorage`) for isolated testing
- **Global Setup**: Centralized test configuration in `setupTests.ts`

## 🚀 Deployment

This project is configured for easy deployment to:

- **GitHub Pages**: Static site hosting
- **Netlify**: Automatic deployments with build previews
- **Vercel**: Seamless React app deployment
- **Any Static Host**: Standard HTML/CSS/JS output

### Build Output

- Production files are generated in the `dist/` directory
- Assets are optimized and cache-busted with content hashing
- Images are processed and optimized by Vite

## 🎯 Performance Features

- **Vite Build System**: Fast development and optimized production builds
- **Code Splitting**: Automatic chunking for optimal loading
- **Asset Optimization**: Images and assets are compressed and optimized
- **Modern JavaScript**: Uses latest React 19 features for better performance
- **Minimal Bundle Size**: Carefully selected dependencies to keep bundle small

## 🔧 Configuration Files

- `vite.config.ts` - Vite configuration with React plugin, Tailwind CSS v4 native integration, and Vitest testing setup
- `src/index.css` - Tailwind CSS v4 configuration with custom theme, `@custom-variant dark`, and CSS custom properties
- `eslint.config.js` - ESLint rules with TypeScript ESLint integration
- `tsconfig.json` - TypeScript compiler configuration with strict settings
- `tsconfig.app.json` - Application-specific TypeScript settings
- `tsconfig.node.json` - Node.js-specific TypeScript configuration
- `src/setupTests.ts` - Global test setup with mocks for browser APIs

## 🔗 Contact

- **GitHub**: [iamvldmrbrvkv](https://github.com/iamvldmrbrvkv)
- **LinkedIn**: [Vladimir Borovikov](https://linkedin.com/in/iamvldmrbrvkv)

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

_Built with ❤️ using React, TypeScript, and Tailwind CSS_
