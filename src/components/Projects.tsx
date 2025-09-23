import React from 'react';

const Projects: React.FC = () => {
  return (
    <section id="projects">
      <h2 className="text-center my-[10px] mx-[50px]">Projects</h2>
      <div className="border-b border-black dark:border-white p-[10px]">
        <p className="my-[10px] mx-[50px]">
          You can find all of my projects on{' '}
          <a 
            href="https://github.com/iamvldmrbrvkv" 
            target="_blank" 
            rel="noopener noreferrer"
            className="font-mono"
          >
            GitHub.
          </a>
        </p>
        <br />
        <p className="my-[10px] mx-[50px]">
          <a 
            href="https://iamvldmrbrvkv.github.io/tea-cozy/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="font-mono"
          >
            Tea Cozy
          </a>
          {' - simple HTML & CSS project.'}
        </p>
        <br />
        <p className="my-[10px] mx-[50px]">
          <a 
            href="https://iamvldmrbrvkv.github.io/bugs-academy/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="font-mono"
          >
            Bugs Academy
          </a>
          {" - flexbox project, full of programmers jokes, like 'how to center a div' and other stuff."}
        </p>
        <br />
        <p className="my-[10px] mx-[50px]">
          <a 
            href="https://iamvldmrbrvkv.github.io/sunday-league/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="font-mono"
          >
            Sunday League
          </a>
          {' - responsive website, adaptive for mobile and desktop.'}
        </p>
        <br />
        <p className="my-[10px] mx-[50px]">
          <a 
            href="https://github.com/iamvldmrbrvkv/mysterious-organism" 
            target="_blank" 
            rel="noopener noreferrer"
            className="font-mono"
          >
            Mysterious Organism
          </a>
          {' - JavaScript project about DNA and mutations.'}
        </p>
        <br />
        <p className="my-[10px] mx-[50px]">
          <a 
            href="https://github.com/iamvldmrbrvkv/credit-card-checker" 
            target="_blank" 
            rel="noopener noreferrer"
            className="font-mono"
          >
            Credit Card Checker
          </a>
          {' - JavaScript project with '}
          <a 
            href="https://en.wikipedia.org/wiki/Luhn_algorithm" 
            target="_blank" 
            rel="noopener noreferrer"
            className="font-mono"
          >
            Luhn algoritm
          </a>
          {' that makes credit cards verification.'}
        </p>
        <br />
        <p className="my-[10px] mx-[50px]">
          <a 
            href="https://github.com/iamvldmrbrvkv/mixed_messages" 
            target="_blank" 
            rel="noopener noreferrer"
            className="font-mono"
          >
            Mixed Messages
          </a>
          {' - JavaScript project that generates random messages each time a user runs the program.'}
        </p>
        <br />
        <p className="my-[10px] mx-[50px]">
          <a 
            href="https://github.com/iamvldmrbrvkv/jammming" 
            target="_blank" 
            rel="noopener noreferrer"
            className="font-mono"
          >
            Jammming
          </a>
          {' - the app created using knowledge of React components, passing state, and requests with the '}
          <a 
            href="https://developer.spotify.com/documentation/web-api" 
            target="_blank" 
            rel="noopener noreferrer"
            className="font-mono"
          >
            Spotify API
          </a>
          {' to build a website that allows users to search the '}
          <a 
            href="https://open.spotify.com/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="font-mono"
          >
            Spotify library
          </a>
          {', create a custom playlist, then save it to their Spotify account.'}
        </p>
        <br />
        <p className="my-[10px] mx-[50px]">
          <a 
            href="https://github.com/iamvldmrbrvkv/reddit-client" 
            target="_blank" 
            rel="noopener noreferrer"
            className="font-mono"
          >
            Reddit Client
          </a>
          {" - the app for Reddit using everything I've learned in Front-End, including React and Redux. I used minimal CSS styling, because wanted to create the old fashioned atmosphere, when only HTML was available. Reddit is a website where people share links to articles, media and other things on the web. The Reddit API provides data which I integrated into my application. The application allow users to view and search posts and comments provided by the API."}
        </p>
      </div>
    </section>
  );
};

export default Projects;