import React from 'react';
import { Link } from 'react-router';
import Frame from 'react-frame-component';

// TODO: Give projects their own full page, or atleast give timr its own page, free of header/ borrder with a simple back/home/projects button.
// TODO: Store all ajax data from projects into redux, to stop them being fetched on every page change.

import SimonGame from './SimonGame';
import Calculator from './Calculator';
import TwitchApp from './TwitchApp';
import QuoteGenerator from './QuoteGenerator';
import PomodoroTimer from './PomodoroTimer';
import WeatherWidget from './WeatherWidget';
import GameOfLife from './GameOfLife';

const personalProjects = [
  {
    livePreview: SimonGame,
    title: 'TimrJS',
  },
];

const fccProjects = [
  {
    livePreview: SimonGame,
    title: 'Simon Game',
  },
  {
    livePreview: TwitchApp,
    title: 'Twitch App',
  },
  {
    livePreview: Calculator,
    title: 'Calculator',
  },
  {
    livePreview: QuoteGenerator,
    title: 'Quote Generator',
  },
  {
    livePreview: PomodoroTimer,
    title: 'Pomodoro Timer',
  },
  {
    livePreview: WeatherWidget,
    title: 'Weather Widget',
  },
  {
    livePreview: GameOfLife,
    title: 'Game Of Life',
  },
];

function Project({ project }) {
  return (
    <Link className="Projects__project" to={`/projects/${project.title.replace(/\s/g, '')}`}>
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
          <section></section>
        </section>
        <section className="Projects__project__title-wrapper">
          <span className="Projects__project__title-wrapper__title">{project.title}</span>
        </section>
      </section>
    </Link>
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
