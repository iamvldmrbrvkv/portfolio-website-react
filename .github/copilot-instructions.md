# Copilot Instructions for React Portfolio

## Project Overview
This is a modern React TypeScript portfolio website for Vladimir Borovikov, migrated from an original HTML/CSS/JS portfolio to use Vite, React, Tailwind CSS, and Vitest for testing. The project showcases Vladimir's skills, projects, and contact information with a clean, minimal design and dark mode support.

## Tech Stack
- **Framework**: React 19.1.1 with TypeScript 5.8.3
- **Build Tool**: Vite 7.1.7
- **Styling**: Tailwind CSS v4.1.13 with PostCSS
- **Testing**: Vitest 3.2.4 + React Testing Library 16.3.0 + Jest DOM
- **Routing**: React Router DOM 7.9.1
- **Dark Mode**: React Context with localStorage persistence and CSS class-based theming
- **Linting**: ESLint 9.36.0 with TypeScript ESLint 8.44.0

## Architecture Patterns

## Architecture Patterns

### Component Structure
- **Header**: Navigation with smooth scrolling, React Router links, and dark mode toggle button
- **About**: Personal introduction with profile image (Memoji style)
- **Projects**: Portfolio showcase with external links to live sites and GitHub repositories
- **Skills**: Technology skills displayed as icons with dark mode inversion
- **Contact**: Social media links and contact information with icons
- **Footer**: Simple footer with heart emoji
- **Pages**: Home (main portfolio) and Contact (dedicated contact page)

### State Management
- Dark mode state managed via React Context (`DarkModeContext` and `DarkModeProvider`)
- Dark mode persisted in localStorage as 'darkTheme' boolean
- Component state uses React hooks (useState, useEffect)
- React Router for navigation state management
- No external state management library needed

### Styling Approach
- Tailwind CSS utility classes with PostCSS processing
- Dark mode using `dark:` prefixes and class-based strategy (`darkMode: 'class'`)
- Responsive design with Tailwind's breakpoint system (md:, max-md:, etc.)
- Anonymous Pro monospace font throughout
- Black/white theme with red accent color (#ff0000)
- Icon dark mode handling: `dark:invert` CSS filter for monochrome icons

### Dark Mode Implementation
- **Toggle**: Sun icon in header with `invert` filter for dark theme
- **Icons**: Skills and contact icons use `dark:invert` to appear white on dark background
- **Classes**: Applied to document.documentElement via JavaScript
- **Storage**: Persisted preference in localStorage

## Development Guidelines

### File Organization
```
src/
├── components/          # React components (Header, About, Projects, Skills, Contact, Footer)
├── pages/              # Route components (Home, Contact)
├── context/            # React context providers and hooks
│   ├── DarkModeContext.ts    # Context definition
│   ├── DarkModeProvider.tsx  # Provider component
│   ├── useDarkMode.ts        # Custom hook
│   └── index.ts              # Barrel exports
├── assets/            # Images and static assets
│   └── images/        # Profile images, logos, icons
├── types/             # TypeScript type definitions
├── utils/             # Data and utility functions
├── __tests__/         # Test files
├── App.tsx            # Main app component with routing
├── main.tsx           # Application entry point
├── index.css          # Global styles and Tailwind imports
└── setupTests.ts      # Test configuration
```

### Code Standards
- Use TypeScript with strict type checking
- Functional components with React hooks (most still use React.FC interface)
- Proper semantic HTML and accessibility attributes
- External links with `target="_blank"` and `rel="noopener noreferrer"`
- Responsive design with Tailwind breakpoints
- Consistent naming conventions (camelCase for variables, PascalCase for components)

### Testing Approach
- Component testing with React Testing Library 16.3.0
- Vitest 3.2.4 as test runner with jsdom environment
- Test user interactions and accessibility features
- Mock external dependencies when needed
- Tests for routing, dark mode context, and component rendering
- Test files located in `src/__tests__/` directory
- Setup file: `src/setupTests.ts` configures Jest DOM matchers

## Common Tasks

### Adding New Projects
Update `src/utils/data.ts` in the `projects` array:
```typescript
{
  title: "Project Name",
  description: "Project description with any special link handling",
  link: "https://project-url.com",
  github: "https://github.com/username/repo" // optional
}
```

### Adding New Skills
Update `src/utils/data.ts` in the `skills` array:
```typescript
{ name: "Skill Name", icon: skillIcon, alt: "Skill Name" }
```
Note: Icons are imported PNG files, not emoji strings. For dark mode compatibility, monochrome icons work best with `dark:invert` filter.

### Modifying Dark Mode
- **Context**: Toggle logic in `src/context/DarkModeProvider.tsx`
- **Styles**: Colors defined in Tailwind classes throughout components
- **Storage**: Persisted in localStorage as `darkTheme` boolean
- **Application**: Applied to `document.documentElement.classList` as 'dark' class
- **Icons**: Use `dark:invert` for monochrome icons, or conditional logic for complex images

### Running Commands
```bash
npm install         # Install dependencies
npm run dev         # Start development server (Vite)
npm run build       # Build for production (TypeScript + Vite)
npm run preview     # Preview production build locally
npm run test        # Run tests in watch mode (Vitest)
npm run test:run    # Run tests once
npm run test:ui     # Run tests with UI interface
npm run lint        # Lint code (ESLint)
```

## Design Principles
- **Minimal and Clean**: Following the original design's simplicity with modern React patterns
- **Typography-focused**: Anonymous Pro monospace font creates distinctive character
- **Performance**: Optimized with Vite build tool and modern React 19 features
- **Accessibility**: Proper ARIA labels, semantic markup, and keyboard navigation
- **Mobile-friendly**: Responsive design using Tailwind's breakpoint system
- **Dark Mode First**: Comprehensive dark mode support with icon inversion and theme persistence

## Current Project Features
- **Routing**: Multi-page navigation with React Router
- **Dark Mode**: Complete theme switching with icon adaptations
- **Responsive Design**: Mobile-optimized with Tailwind breakpoints
- **Performance**: Fast builds with Vite and optimized asset handling
- **Testing**: Comprehensive test suite with Vitest and React Testing Library
- **TypeScript**: Full type safety with strict configuration

## Deployment Notes
- Static site suitable for GitHub Pages, Netlify, Vercel, or any static hosting
- Build output in `dist/` directory after `npm run build`
- Images are optimized and bundled by Vite with content hashing
- All external links open in new tabs for better UX
- Dark mode preference persists across sessions
- Single-page application with client-side routing

## Maintenance
- Keep dependencies updated regularly (especially React, Vite, Tailwind)
- Monitor bundle size with `npm run build` output
- Add tests for new components following existing patterns
- Verify responsive design on various screen sizes (Tailwind breakpoints)
- Test dark mode functionality across all components and icons
- Validate accessibility with screen readers and keyboard navigation

## Common Issues & Solutions

### Dark Mode Icons
- **Problem**: Icons appear dark in dark mode
- **Solution**: Add `dark:invert` class to monochrome icons, or use conditional logic for complex images

### Mobile Responsiveness  
- **Current**: Uses Tailwind's standard breakpoints (md:, max-md:, etc.)
- **Alternative**: Custom breakpoints can be added to `tailwind.config.js` if needed

### React.FC Usage
- **Current**: Most components still use `React.FC` interface
- **Modern**: Can be simplified to regular function components with explicit return types