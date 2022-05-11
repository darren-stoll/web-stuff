import React from 'react';
import linkedinLogo from '../images/LI-In-Bug.png';
import githubLogo from '../images/GitHub-Mark-120px-plus.png';
import ProjectTile from './projectTile.js';

import profilePic from '../images/personPhotoZoomed.jpg';
import twitchLogo from '../images/TwitchGlitchBlackOps.png';
import covidIcon from '../images/covidIcon.svg';
import smileIcon from '../images/smile.png';


const MainPage = () => {
  // Values for the ProjectTile components
  const moodValues = {
    svg: <img src={smileIcon} height="64" alt="" />,
    info: <><p>Mood Tracker is a web app that tracks your moods on local storage.</p><p>For this app, I used the following:</p><ul><li>Next.js</li><li>JavaScript</li><li>React</li></ul></>
  }

  const pomoValues = {
    svg: <svg width="64" height="64" viewBox="0 0 16 16"> <path fillRule="evenodd" d="M8.515 1.019A7 7 0 0 0 8 1V0a8 8 0 0 1 .589.022l-.074.997zm2.004.45a7.003 7.003 0 0 0-.985-.299l.219-.976c.383.086.76.2 1.126.342l-.36.933zm1.37.71a7.01 7.01 0 0 0-.439-.27l.493-.87a8.025 8.025 0 0 1 .979.654l-.615.789a6.996 6.996 0 0 0-.418-.302zm1.834 1.79a6.99 6.99 0 0 0-.653-.796l.724-.69c.27.285.52.59.747.91l-.818.576zm.744 1.352a7.08 7.08 0 0 0-.214-.468l.893-.45a7.976 7.976 0 0 1 .45 1.088l-.95.313a7.023 7.023 0 0 0-.179-.483zm.53 2.507a6.991 6.991 0 0 0-.1-1.025l.985-.17c.067.386.106.778.116 1.17l-1 .025zm-.131 1.538c.033-.17.06-.339.081-.51l.993.123a7.957 7.957 0 0 1-.23 1.155l-.964-.267c.046-.165.086-.332.12-.501zm-.952 2.379c.184-.29.346-.594.486-.908l.914.405c-.16.36-.345.706-.555 1.038l-.845-.535zm-.964 1.205c.122-.122.239-.248.35-.378l.758.653a8.073 8.073 0 0 1-.401.432l-.707-.707z"/> <path fillRule="evenodd" d="M8 1a7 7 0 1 0 4.95 11.95l.707.707A8.001 8.001 0 1 1 8 0v1z"/> <path fillRule="evenodd" d="M7.5 3a.5.5 0 0 1 .5.5v5.21l3.248 1.856a.5.5 0 0 1-.496.868l-3.5-2A.5.5 0 0 1 7 9V3.5a.5.5 0 0 1 .5-.5z"/> </svg>,
    info: <><p>Pomodoro Clock is a countdown timer that is used to break down work into intervals separated by short breaks. You can read more about the technique <a href="https://en.wikipedia.org/wiki/Pomodoro_Technique" target="_blank" rel="noopener noreferrer">here</a>.</p><p>For this app, I used the following:</p><ul><li>CSS</li><li>Bootstrap</li><li>JavaScript</li><li>React</li></ul></>
  }

  const medValues = {
    svg: <svg width="64" height="64" viewBox="0 0 16 16"> <path d="M4 1h5v1H4a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V6h1v7a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2z"/> <path d="M9 4.5V1l5 5h-3.5A1.5 1.5 0 0 1 9 4.5z"/> <path fillRule="evenodd" d="M7 4a.5.5 0 0 1 .5.5v.634l.549-.317a.5.5 0 1 1 .5.866L8 6l.549.317a.5.5 0 1 1-.5.866L7.5 6.866V7.5a.5.5 0 0 1-1 0v-.634l-.549.317a.5.5 0 1 1-.5-.866L6 6l-.549-.317a.5.5 0 0 1 .5-.866l.549.317V4.5A.5.5 0 0 1 7 4zM5 9.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5z"/> </svg>,
    info: <><p>This is based on a number of medical office sites that you see on the web.</p><p>For this site, I used the following:</p><ul><li>React</li><li>CSS</li></ul></>
  }

  const clipValues = {
    svg: <img src={twitchLogo} height="64" alt="" />,
    info: <><p><b>Work on this has ceased.</b></p><p>This is a page that connect to Twitch.tv's API and retrieves 20 clips per request based on the username entered.</p><p>For this site, I used the following:</p><ul><li>React</li><li>Axios (for REST API)</li></ul></>
  }

  const covidValues = {
    svg: <img src={covidIcon} height="64" alt="" />,
    info: <><p>I built this page at the request of a client who wants to display various data for COVID-19 in the United States, including mortality and infection rates.</p><p>For this site, I used the following:</p><ul><li>React</li><li>Axios (for content retrieval)</li><li>react-usa-map (for the interactive map)</li></ul></>
  }

  return (
    <div style={{backgroundColor:'#202020'}}>

      <main className="main">
        {/* Welcome begin */}
        <section id="welcome-section" name="welcome-section">
          <p style={{fontSize: '24px'}}>About me - <b>[Darren Stoll]</b></p>
          <img className="profilePic" src={profilePic} alt="" />
          <div className="welcomeDescription">
            <p>I am a full stack software engineer specializing in React.</p>
            <p>I am proficient in JavaScript, React, Express, and Node.js.</p>
            <p>I have been working in web development off and on since 1998, building solutions for myself and others.</p>
          </div>
          {/* Putting links here in buttons to various resources about myself */}
          <div id="links">
              {/* image source for icons from icons8.com */}
              <a className="linkedinLink" href="https://www.linkedin.com/in/darren-stoll/" target="_blank" rel="noopener noreferrer"><img className="linkedinIcon" src={linkedinLogo} alt="LinkedIn Profile" title="LinkedIn Profile" /></a>
              <a className="githubLink" href="https://github.com/darren-stoll" target="_blank" rel="noopener noreferrer"><img className="githubIcon" src={githubLogo} alt="GitHub Profile" title="GitHub Profile" /></a>
          </div>
        </section>
        {/* Welcome end */}
        {/* Projects begin */}
        <section id="project-section" className="hidden" name="project-section">
          <h2>Projects</h2>
          <div id="projects" name="projects">
            <ProjectTile name="Mood Tracker" icon={moodValues.svg} link="https://mood-tracker-darren-stoll.vercel.app/" target="moodModal" info={moodValues.info} />
            <ProjectTile name="COVID19 Watch" icon={covidValues.svg} link="https://jlc42.github.io/" target="covidModal" info={covidValues.info} /> 
            <ProjectTile name="Twitch Clipper" icon={clipValues.svg} link="/TwitchClipper" target="clipModal" info={clipValues.info} />
            <ProjectTile name="Pomodoro Clock" icon={pomoValues.svg} link="/PomodoroClock" target="pomoModal" info={pomoValues.info} />
            <ProjectTile name="Medical Template Site" icon={medValues.svg} link="/MedOfficeTemplate" target="medModal" info={medValues.info} />
          </div>
        </section>
        {/* Projects end */}
      </main>
    </div>
  )
}

export default MainPage;
