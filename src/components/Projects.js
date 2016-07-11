import React from 'react';
import { Link } from 'react-router';
import Frame from 'react-frame-component';

// TODO: Give projects their own full page, or atleast give timr its own page
// TODO: Store all ajax data from projects into redux, to stop them being fetched on every page change.

import SimonGame from './SimonGame';
import Calculator from './Calculator';
import TwitchApp from './TwitchApp';
import QuoteGenerator from './QuoteGenerator';
import PomodoroTimer from './PomodoroTimer';

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
  {
    livePreview: QuoteGenerator,
    title: 'Quote Generator',
    links: {
      Codepen: 'http://codepen.io/joesmith/pen/EKRpLQ',
      FCC: 'https://www.freecodecamp.com/challenges/build-a-random-quote-machine',
    },
  },
  {
    livePreview: PomodoroTimer,
    title: 'Pomodoro Timer',
    links: {
      Codepen: 'http://codepen.io/joesmith/pen/KzoaLe',
      FCC: 'https://www.freecodecamp.com/challenges/build-a-pomodoro-clock',
    },
  },
];

function Project({ project }) {
  return (
    <section className="Projects__project">
      <section className="Projects__project__content-wrapper">
        <section className="Projects__project__live-preview">
          <Frame
            id="test"
            frameBorder={0}
            scrolling="no"
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
          <span>{project.title}</span>
        </Link>
      </section>
    </section>
  );
}
// Add some sort of separator between personal and freecodecamp
// Make it more obvious that the title links to the project and the live preview is just for external links
function Projects({ children }) {
  return (
    <section className="Projects">
      <h2>Personal</h2>
      <p>The following projects are my own personal projects.</p>
      <section className="Projects__wrapper">
        {personalProjects.map(project => (
          <Project key={project.title} project={project} />
        ))}
      </section>
      <h2>freeCodeCamp</h2>
      <p>
        The following projects were built as part of the
          <a href="http://www.freecodecamp.com" target="_blank"> freeCodeCamp.com </a>
        curriculum.
      </p>
      <section className="Projects__wrapper">
        {fccProjects.map(project => (
          <Project key={project.title} project={project} />
        ))}
      </section>
    </section>
  );
}

export default Projects;
