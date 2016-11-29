import React from 'react';

import Code from './Code';

function ProjectNotes({
  title,
  titleLink,
  objective,
  objectiveLink,
  userStories,
  codeHash
}) {
  return (
    <section className="ProjectNotes container">
      <a href={titleLink} target="_blank">
        <h1 className="ProjectNotes__title">{title}</h1>
      </a>
      <h3>Objective</h3>
      <p>{objective}<a href={objectiveLink} target="_blank">this.</a></p>
      <h3>User Stories</h3>
      <ul>
        {userStories.map(userStory => (
          <li key={userStory}>{userStory}</li>
        ))}
      </ul>
      <h3>Code</h3>
      <iframe
        height='500'
        scrolling='no'
        title={title} src={`//codepen.io/joesmith/embed/${codeHash}/?height=500&theme-id=26476&default-tab=js&embed-version=2`}
        frameBorder='no'
        allowTransparency='true'
        allowFullScreen='true'
        style={{width: '100%'}}
      />
    </section>
  );
}

export default ProjectNotes;
