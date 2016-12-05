import React from 'react';
import { Link } from 'react-router'

function About() {
  return (
    <section className="About container">
      <img
        className="About__header-img"
        src="https://placehold.it/250x250"
      />
      <p>Hi, I'm Joe. I am an aspiring web developer.</p>
      <p>I started teaching myself to code last year (2015), after developing a passion for it whilst studying at The Open University. I focused on web based technologies, such as: JavaScript, CSS & HTML.</p>
      <p className="About__no-margin-p">I used a variety of online resources including:</p>
      <ul>
        <li><a href="https://www.codecademy.com/">codecademy.com</a></li>
        <li><a href="https://teamtreehouse.com/">teamtreehouse.com</a></li>
        <li><a href="https://www.codeschool.com/">codeschool.com</a></li>
        <li><a href="https://www.udemy.com/">udemy.com (Anthony Alicea’s Understand Node/Angular/JS courses)</a></li>
        <li><a href="https://www.freecodecamp.com/">freecodecamp.com</a></li>
      </ul>
      <p>My main focus was on Free Code Camp due to their emphasis on project and community based learning. Working on whole projects enabled me to consolidate and implement both, the back-end and front-end skills I have developed to fit the specifications that were given to me. A number of the projects I have built are available <Link to="/projects">here</Link>, source code included.</p>
      <p>I also had the inspiration (whilst working on Free Code Camps Pomodoro project) to build an open source library that makes it simple to create timers in JavaScript. I have been actively adding to and building upon the initial implementation, I'm happy with the results and the knowledge that I have contributed to the community. The source is <a href="https://github.com/joesmith100/timrjs" target="_blank">here</a> and the interactive readme is <Link to="/TimrJS">here</Link>.</p>
      <p>This website is built using React, React-Router and Redux, with a Node & Express back-end. It utilises Reacts server rendering to deliver initial page loads and asset files are bundled with Webpack.</p>
      <p>I’m currently looking for work so please get in touch if you're interested: <a href="mailto:joesmith0488@gmail.com" target="_blank">Email</a>, <a href="https://uk.linkedin.com/in/joe-smith-42b06749" target="_blank">LinkedIn</a>.</p>
    </section>
  );
}

export default About;
