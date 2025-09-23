# Copilot Instructions for React Portfolio

## Project Overview
This is a modern React TypeScript portfolio website for Vladimir Borovikov, migrated from an original HTML/CSS/JS portfolio to use Vite, React, Tailwind CSS, and Vitest for testing.

## Tech Stack
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS v4
- **Testing**: Vitest + React Testing Library
- **Dark Mode**: React Context with localStorage persistence

## Architecture Patterns

### Component Structure
- **Header**: Navigation and dark mode toggle
- **About**: Personal introduction with profile image
- **Projects**: Portfolio showcase with external links
- **Skills**: Technology skills with emoji icons
- **Contact**: Social media and contact links
- **Footer**: Simple footer with heart emoji

### State Management
- Dark mode state managed via React Context (`DarkModeContext`)
- Component state uses React hooks
- No external state management library needed

### Styling Approach
- Tailwind CSS utility classes
- Dark mode using `dark:` prefixes
- Responsive design with mobile-first approach
- Anonymous Pro monospace font throughout
- Black/white theme with red accent color

## Development Guidelines

### File Organization
```
src/
├── components/          # React components
├── context/            # React context providers
├── assets/            # Images and static assets
├── types/             # TypeScript type definitions
├── utils/             # Data and utility functions
└── __tests__/         # Test files
```

### Code Standards
- Use TypeScript with strict type checking
- Functional components with React hooks
- Proper semantic HTML and accessibility
- External links with `target="_blank"` and `rel="noopener noreferrer"`
- Responsive design considerations

### Testing Approach
- Component testing with React Testing Library
- Test user interactions and accessibility
- Mock external dependencies
- Maintain high test coverage for critical components

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
{ name: "Skill Name", icon: "🚀", alt: "Skill Name" }
```

### Modifying Dark Mode
- Colors defined in `src/index.css` and Tailwind classes
- Toggle logic in `src/context/DarkModeContext.tsx`
- Persisted in localStorage as `darkTheme` boolean

### Running Commands
```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run test         # Run tests in watch mode
npm run test:run     # Run tests once
npm run lint         # Lint code
```

## Design Principles
- **Minimal and Clean**: Following the original design's simplicity
- **Typography-focused**: Monospace font creates distinctive character
- **Performance**: Optimized with Vite and modern React patterns
- **Accessibility**: Proper ARIA labels and semantic markup
- **Mobile-friendly**: Responsive design that works on all devices

## Deployment Notes
- Static site suitable for GitHub Pages, Netlify, Vercel
- Build output in `dist/` directory
- Images are optimized and bundled by Vite
- All external links open in new tabs for better UX

## Maintenance
- Keep dependencies updated regularly
- Monitor bundle size with `npm run build`
- Add tests for new components
- Verify responsive design on various screen sizes
- Test dark mode functionality across all components