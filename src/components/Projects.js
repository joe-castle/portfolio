import React from 'react';
import { Link } from 'react-router';

import SimonGame from './projects/SimonGame';
import Calculator from './projects/Calculator';
import TwitchApp from './projects/TwitchApp';

const projects = [
  {
    livePreview: SimonGame,
    title: 'Simon Game',
    technology: [],
    links: {
      Codepen: 'http://codepen.io/joesmith/pen/ZWmaWP',
      FCC: 'https://www.freecodecamp.com/challenges/build-a-simon-game',
    },
  },
  {
    livePreview: TwitchApp,
    title: 'Twitch App',
    technology: [],
    links: {
      Codepen: 'http://codepen.io/joesmith/pen/zqyXjo',
      FCC: 'https://www.freecodecamp.com/challenges/use-the-twitchtv-json-api',
    },
  },
  {
    livePreview: Calculator,
    title: 'Calculator',
    technology: [],
    links: {
      Codepen: 'http://codepen.io/joesmith/pen/EKRpLQ',
      FCC: 'https://www.freecodecamp.com/challenges/build-a-javascript-calculator',
    },
  }
];

function Projects() {
  return (
    <section className="Projects container">
      {projects.map(project => (
        <section key={project.title} className="Projects__project">
          <section className="Projects__project__live-preview">
            {React.createElement(project.livePreview)}
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
          <h2 className="Projects__project__title">
            <Link to={`/projects/${project.title.replace(' ', '')}`}>
              {project.title}
            </Link>
          </h2>
        </section>
      ))}
    </section>
  );
}

export default Projects;
