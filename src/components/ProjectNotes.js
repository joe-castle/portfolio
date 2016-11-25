import React from 'react';

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
    <section className="ProjectNotes">
      <a href={titleLink} target="_blank">
        <h1 className="ProjectNotes__title">{title}</h1>
      </a>
      <h3>Objective</h3>
      <p>{objective}<a href={objectiveLink} target="_blank">this.</a></p>
      <h3>User Stories</h3>
      <ul>
        {userStories.map(userStory => (
          <li>{userStory}</li>
        ))}
      </ul>
      <h3>Code</h3>
      <pre>
        
      </pre>
    </section>
  );
}

export default ProjectNotes;
