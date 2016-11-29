import React from 'react';
import Frame from 'react-frame-component';

import Button from './Button';
import Code from './Code';

class ProjectNotes extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      gist: this.props.js
    }
  }

  render() {
    return (
      <section className="ProjectNotes container">
        <a href={this.props.titleLink} target="_blank">
          <h1 className="ProjectNotes__title">{this.props.title}</h1>
        </a>
        <h3>Objective</h3>
        <p>{this.props.objective}
          <a href={this.props.objectiveLink} target="_blank">this.</a>
        </p>
        <h3>User Stories</h3>
        <ul>
          {this.props.userStories.map(userStory => (
            <li key={userStory}>{userStory}</li>
          ))}
        </ul>
        <h3>Code</h3>
        <Button
          onClick={() => { this.setState({ gist: this.props.js })}}
          active={this.state.gist === this.props.js}
          style={{
            margin: '0 5px 10px 9px',
          }}
        >
          JavaScript
        </Button>
        <Button
          onClick={() => { this.setState({ gist: this.props.css })}}
          active={this.state.gist === this.props.css}
        >
          Stylus
        </Button>
        <section>
          <Frame
            height='500'
            frameBorder='no'
            allowTransparency='true'
            allowFullScreen='true'
            style={{
              width: '100%',
              display: this.state.gist === this.props.js ? 'block' : 'none'
            }}
            initialContent={`
              <body><script src="https://gist.github.com/joesmith100/${this.props.js}.js">
              </script></body>
              `}
            />
          <Frame
            height='500'
            frameBorder='no'
            allowTransparency='true'
            allowFullScreen='true'
            style={{
              width: '100%',
              display: this.state.gist === this.props.css ? 'block' : 'none'
            }}
            initialContent={`
              <body><script src="https://gist.github.com/joesmith100/${this.props.css}.js">
              </script></body>
              `}
            />
        </section>
      </section>
    );
  }
}

function ProjectNotes({
  title,
  titleLink,
  objective,
  objectiveLink,
  userStories,
  js,
  css
}) {
  return (
    <section className="ProjectNotes container">
      <a href={this.props.titleLink} target="_blank">
        <h1 className="ProjectNotes__title">{this.props.title}</h1>
      </a>
      <h3>Objective</h3>
      <p>{this.props.objective}
        <a href={this.props.objectiveLink} target="_blank">this.</a>
      </p>
      <h3>User Stories</h3>
      <ul>
        {this.props.userStories.map(userStory => (
          <li key={userStory}>{userStory}</li>
        ))}
      </ul>
      <h3>Code</h3>
      <Frame
        height='500'
        frameBorder='no'
        allowTransparency='true'
        allowFullScreen='true'
        style={{ width: '100%' }}
        initialContent={`
          <body><script src="https://gist.github.com/joesmith100/${this.state.gist}.js"></script></body>
        `}
      />
    </section>
  );
}

export default ProjectNotes;
