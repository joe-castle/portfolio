import React from 'react';
import { Link } from 'react-router';
import Frame from 'react-frame-component';

import TimrJS from './TimrJS';
import SimonGame from './SimonGame';
import Calculator from './Calculator';
import TwitchApp from './TwitchApp';
import QuoteGenerator from './QuoteGenerator';
import PomodoroTimer from './PomodoroTimer';
import WeatherWidget from './WeatherWidget';
import GameOfLife from './GameOfLife';

const personalProjects = [
  {
    livePreview: TimrJS,
    title: 'TimrJS',
  },
];

const fccProjects = [
  {
    livePreview: GameOfLife,
    title: 'Game Of Life',
  },
  {
    livePreview: SimonGame,
    title: 'Simon Game',
  },
  {
    livePreview: PomodoroTimer,
    title: 'Pomodoro Timer',
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
    livePreview: TwitchApp,
    title: 'Twitch App',
  },
  {
    livePreview: WeatherWidget,
    title: 'Weather Widget',
  },
];

function Project({ project, personal }) {
  return (
    <Link
      className="Projects__project"
      to={`/${personal ? '' : 'projects/'}${project.title.replace(/\s/g, '')}`}
    >
      <section className="Projects__project__content-wrapper">
        <section className="Projects__project__live-preview">
          <Frame
            id="test"
            frameBorder={0}
            scrolling="no"
            initialContent={
              `<!DOCTYPE html><html><head>
              <link href="/assets/bundle.css" rel="stylesheet">
              <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
              </head><body><div></div></body></html>`
            }
          >
            {React.createElement(project.livePreview, { livePreview: true })}
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

function Projects({ children }) {
  return (
    <section className="Projects container">
      <section className="Projects__wrapper">
        {personalProjects.map(project => (
          <Project key={project.title} project={project} personal />
        ))}
      </section>
      <h2>Free Code Camp</h2>
      <p>
        The following are just some of the projects that were built as part of the
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
