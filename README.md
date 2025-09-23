# Vladimir Borovikov - Portfolio Website (React)

A modern, responsive portfolio website built with React, TypeScript, and Tailwind CSS, showcasing Vladimir Borovikov's skills as a full-stack engineering student and his journey from musician to software engineer.

![Portfolio Screenshot](https://img.shields.io/badge/React-19.1.1-blue) ![TypeScript](https://img.shields.io/badge/TypeScript-5.8.3-blue) ![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.1.13-blue) ![Vite](https://img.shields.io/badge/Vite-7.1.7-purple) ![Tests](https://img.shields.io/badge/Tests-Vitest-green)

## 🚀 Features

- **Responsive Design**: Optimized for mobile, tablet, and desktop viewing
- **Dark Mode Support**: Complete theme switching with icon adaptations and localStorage persistence
- **Modern Tech Stack**: React 19, TypeScript, Tailwind CSS v4, and Vite
- **Single Page Application**: Smooth navigation with React Router DOM
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
- **PostCSS** - CSS processing with Tailwind integration
- **ESLint 9.36.0** - Code linting with TypeScript support

### Testing
- **Vitest 3.2.4** - Fast unit testing framework
- **React Testing Library 16.3.0** - Component testing utilities
- **Jest DOM** - Additional DOM matchers
- **jsdom** - DOM environment for testing

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
├── context/             # React Context providers
│   ├── DarkModeContext.ts    # Dark mode context
│   ├── DarkModeProvider.tsx  # Context provider
│   └── useDarkMode.ts        # Custom hook
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

## 🎨 Dark Mode Implementation

The portfolio features a comprehensive dark mode system:

- **Toggle**: Sun icon in header that inverts colors when dark mode is active
- **Icon Adaptation**: Skills and contact icons use `dark:invert` CSS filter to appear white on dark background
- **Persistence**: Theme preference saved in localStorage
- **Implementation**: CSS class-based theming applied to document element

## 📱 Responsive Design

Built with mobile-first approach using Tailwind CSS breakpoints:
- **Mobile**: Optimized layout and navigation
- **Tablet**: Intermediate layouts with proper spacing
- **Desktop**: Full-featured layout with all elements visible

## 🧪 Testing Strategy

- **Component Testing**: All major components have comprehensive tests
- **User Interaction Testing**: Tests for clicks, navigation, and form interactions
- **Accessibility Testing**: Ensures proper ARIA labels and semantic HTML
- **Dark Mode Testing**: Validates theme switching functionality
- **Routing Testing**: Tests for proper navigation and URL handling

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

- `vite.config.ts` - Vite configuration with React plugin and testing setup
- `tailwind.config.js` - Tailwind CSS configuration with custom theme
- `tsconfig.json` - TypeScript compiler configuration
- `eslint.config.js` - ESLint rules and settings
- `postcss.config.js` - PostCSS configuration for Tailwind

## 👤 About Vladimir Borovikov

Full-stack engineering student at Codecademy with a background in music and art. This portfolio showcases the transition from creative arts to software engineering, featuring projects that demonstrate growth in web development technologies.

**Skills Featured:**
- Frontend: HTML5, CSS3, JavaScript, TypeScript, React, Redux
- Tools: Git, Terminal, Node.js
- Learning: Full-stack development principles and modern web technologies

## 📞 Contact

- **GitHub**: [iamvldmrbrvkv](https://github.com/iamvldmrbrvkv)
- **LinkedIn**: [Vladimir Borovikov](https://linkedin.com/in/iamvldmrbrvkv)
- **Email**: Available through contact form

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

*Built with ❤️ using React, TypeScript, and Tailwind CSS*
