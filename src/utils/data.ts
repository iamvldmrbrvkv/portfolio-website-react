import type { Project, Skill, ContactLink } from '../types';

export const projects: Project[] = [
  {
    title: "Tea Cozy",
    description: "Simple HTML & CSS project.",
    link: "https://iamvldmrbrvkv.github.io/tea-cozy/",
    github: "https://github.com/iamvldmrbrvkv/tea-cozy.git"
  },
  {
    title: "Bugs Academy",
    description: "Flexbox project, full of programmers jokes, like 'how to center a div' and other stuff.",
    link: "https://iamvldmrbrvkv.github.io/bugs-academy/",
    github: "https://github.com/iamvldmrbrvkv/bugs-academy.git"
  },
  {
    title: "Sunday League",
    description: "Responsive website, adaptive for mobile and desktop.",
    link: "https://iamvldmrbrvkv.github.io/sunday-league/",
    github: "https://github.com/iamvldmrbrvkv/sunday-league.git"
  },
  {
    title: "Mysterious Organism",
    description: "JavaScript project about DNA and mutations.",
    link: "https://github.com/iamvldmrbrvkv/mysterious-organism"
  },
  {
    title: "Credit Card Checker",
    description: "JavaScript project with Luhn algoritm that makes credit cards verification.",
    link: "https://github.com/iamvldmrbrvkv/credit-card-checker"
  },
  {
    title: "Mixed Messages",
    description: "JavaScript project that generates random messages each time a user runs the program.",
    link: "https://github.com/iamvldmrbrvkv/mixed_messages"
  },
  {
    title: "Jammming",
    description: "The app created using knowledge of React components, passing state, and requests with the Spotify API to build a website that allows users to search the Spotify library, create a custom playlist, then save it to their Spotify account.",
    link: "https://github.com/iamvldmrbrvkv/jammming"
  },
  {
    title: "Reddit Client",
    description: "The app for Reddit using everything I've learned in Front-End, including React and Redux. I used minimal CSS styling, because wanted to create the old fashioned atmosphere, when only HTML was available. Reddit is a website where people share links to articles, media and other things on the web. The Reddit API provides data which I integrated into my application. The application allow users to view and search posts and comments provided by the API.",
    link: "https://github.com/iamvldmrbrvkv/reddit-client"
  }
];

export const skills: Skill[] = [
  { name: "HTML5", icon: "🌐", alt: "HTML5" },
  { name: "CSS3", icon: "🎨", alt: "CSS3" },
  { name: "Terminal", icon: "💻", alt: "Terminal" },
  { name: "JavaScript", icon: "⚡", alt: "JavaScript" },
  { name: "Git", icon: "📚", alt: "Git" },
  { name: "GitHub", icon: "🐙", alt: "GitHub" },
  { name: "Node.js", icon: "🟢", alt: "Node.js" },
  { name: "React", icon: "⚛️", alt: "React" },
  { name: "Redux", icon: "🔄", alt: "Redux" },
  { name: "TypeScript", icon: "📘", alt: "TypeScript" }
];

export const contactLinks: ContactLink[] = [
  {
    name: "Email",
    url: "mailto:iamvladimirborovikov@gmail.com",
    icon: "✉️",
    alt: "Email"
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/iamvldmrbrvkv/",
    icon: "💼",
    alt: "LinkedIn"
  },
  {
    name: "Telegram",
    url: "https://t.me/iamvldmrbrvkv",
    icon: "📱",
    alt: "Telegram"
  },
  {
    name: "Instagram",
    url: "https://instagram.com/iamvldmrbrvkv",
    icon: "📷",
    alt: "Instagram"
  },
  {
    name: "Facebook",
    url: "https://www.facebook.com/iamvldmrbrvkv",
    icon: "📘",
    alt: "Facebook"
  },
  {
    name: "Twitter",
    url: "https://twitter.com/iamvldmrbrvkv",
    icon: "🐦",
    alt: "Twitter"
  }
];