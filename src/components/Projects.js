import React from 'react';
import { Link } from 'react-router';
import Frame from 'react-frame-component';

import SimonGame from './projects/SimonGame';
import Calculator from './projects/Calculator';
import TwitchApp from './projects/TwitchApp';

const personalProjects = [
  {
    livePreview: SimonGame,
    title: 'TimrJS',
    links: {
      Github: 'https://github.com/joesmith100/timrjs',
      npm: 'https://www.npmjs.com/package/timrjs'
    },
  },
];

const fccProjects = [
  {
    livePreview: SimonGame,
    title: 'Simon Game',
    links: {
      Codepen: 'http://codepen.io/joesmith/pen/ZWmaWP',
      FCC: 'https://www.freecodecamp.com/challenges/build-a-simon-game',
    },
  },
  {
    livePreview: TwitchApp,
    title: 'Twitch App',
    links: {
      Codepen: 'http://codepen.io/joesmith/pen/zqyXjo',
      FCC: 'https://www.freecodecamp.com/challenges/use-the-twitchtv-json-api',
    },
  },
  {
    livePreview: Calculator,
    title: 'Calculator',
    links: {
      Codepen: 'http://codepen.io/joesmith/pen/EKRpLQ',
      FCC: 'https://www.freecodecamp.com/challenges/build-a-javascript-calculator',
    },
  },
];

function Project({ project }) {
  return (
    <section className="Projects__project">
      <section className="Projects__project__content-wrapper">
        <section className="Projects__project__live-preview">
          <Frame
            frameBorder={0}
            initialContent={
              `<!DOCTYPE html><html><head>
              <link href="/assets/bundle.css" rel="stylesheet">
              </head><body><div></div></body></html>`
            }
            >
            {React.createElement(project.livePreview)}
          </Frame>
          <section className="Projects__project__live-preview__overlay">
            <section className="Projects__project__live-preview__overlay__links">
              {Object.keys(project.links).map(link => (
                <a
                  className={`Projects__project__live-preview__overlay__links--${link}`}
                  key={link}
                  href={project.links[link]}
                  target="_blank"
                  />
              ))}
            </section>
          </section>
        </section>
        <Link className="Projects__project__title" to={`/projects/${project.title.replace(' ', '')}`}>
          {project.title}
        </Link>
      </section>
    </section>
  );
}

function Projects({ children }) {
  return (
    <section className="Projects container">
      <h2>Personal</h2>
      <p>The following projects are my own personal projects.</p>
      <section className="Projects__wrapper">
        {personalProjects.map(project => (
          <Project key={project.title} project={project} />
        ))}
      </section>
      <section className="Projects__wrapper">
        <h2><a href="freecodecamp.com" target="_blank">FreeCodeCamp.com</a></h2>
        <p>The following projects were built as part of the freeCodeCamp curriculum.</p>
        {fccProjects.map(project => (
          <Project key={project.title} project={project} />
        ))}
      </section>
    </section>
  );
}

export default Projects;
