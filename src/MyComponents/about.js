import React from 'react';

const About = () => {
  return (
    <div className="container my-5">
      <h2>About Me</h2>
      <p>
        Hi, I'm Usman Anwar! I'm a web developer passionate about building clean, efficient, and user-friendly applications. 
        This Todo List app is one of my projects where I practice using ReactJS to manage states, routing, and persistent storage with localStorage.
      </p>

      <h2 className="mt-4">About This Project</h2>
      <p>
        This project is a simple and functional Todo List built with React. 
        It allows users to add, delete, and view their tasks. The app uses localStorage, so your todos are saved even when you close or reload the browser.
      </p>
      <ul>
        <li><strong>React Functional Components</strong> and <strong>Hooks</strong> are used throughout the app.</li>
        <li>Routing is handled using <strong>React Router v6</strong>.</li>
        <li>Todos persist in <strong>localStorage</strong>.</li>
        <li>Simple, clean Bootstrap styling for a better user experience.</li>
      </ul>

      <p>
        Feel free to explore the code, modify the app, and make it even better!
      </p>
    </div>
  );
}

export default About;
