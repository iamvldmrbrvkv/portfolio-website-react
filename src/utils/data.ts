import type { Project, Skill, ContactLink } from '../types';

// Import skill logos
import html5Logo from '../assets/images/logos/html5-logo.png';
import css3Logo from '../assets/images/logos/css3-logo.png';
import terminalLogo from '../assets/images/logos/terminal-logo.png';
import javascriptLogo from '../assets/images/logos/javascript-logo.png';
import gitLogo from '../assets/images/logos/git-logo.png';
import githubLogo from '../assets/images/logos/github-logo.png';
import nodeLogo from '../assets/images/logos/node-logo.png';
import reactLogo from '../assets/images/logos/react-logo.png';
import reduxLogo from '../assets/images/logos/redux-logo.png';
import typescriptLogo from '../assets/images/logos/typescript-logo.png';

// Import contact logos
import emailLogo from '../assets/images/logos/email-logo.png';
import linkedinLogo from '../assets/images/logos/linkedin-logo.png';
import telegramLogo from '../assets/images/logos/telegram-logo.png';
import instagramLogo from '../assets/images/logos/instagram-logo.png';
import facebookLogo from '../assets/images/logos/facebook-logo.png';
import twitterLogo from '../assets/images/logos/twitter-logo.png';

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
    description: "JavaScript project with Luhn algorithm that makes credit cards verification.",
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
  { name: "HTML5", icon: html5Logo, alt: "HTML5" },
  { name: "CSS3", icon: css3Logo, alt: "CSS3" },
  { name: "Terminal", icon: terminalLogo, alt: "Terminal" },
  { name: "JavaScript", icon: javascriptLogo, alt: "JavaScript" },
  { name: "Git", icon: gitLogo, alt: "Git" },
  { name: "GitHub", icon: githubLogo, alt: "GitHub" },
  { name: "Node.js", icon: nodeLogo, alt: "Node.js" },
  { name: "React", icon: reactLogo, alt: "React" },
  { name: "Redux", icon: reduxLogo, alt: "Redux" },
  { name: "TypeScript", icon: typescriptLogo, alt: "TypeScript" }
];

export const contactLinks: ContactLink[] = [
  {
    name: "Email",
    url: "mailto:iamvladimirborovikov@gmail.com",
    icon: emailLogo,
    alt: "Email"
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/iamvldmrbrvkv/",
    icon: linkedinLogo,
    alt: "LinkedIn"
  },
  {
    name: "Telegram",
    url: "https://t.me/iamvldmrbrvkv",
    icon: telegramLogo,
    alt: "Telegram"
  },
  {
    name: "Instagram",
    url: "https://instagram.com/iamvldmrbrvkv",
    icon: instagramLogo,
    alt: "Instagram"
  },
  {
    name: "Facebook",
    url: "https://www.facebook.com/iamvldmrbrvkv",
    icon: facebookLogo,
    alt: "Facebook"
  },
  {
    name: "Twitter",
    url: "https://twitter.com/iamvldmrbrvkv",
    icon: twitterLogo,
    alt: "Twitter"
  }
];