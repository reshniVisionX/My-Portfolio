import React from 'react';
import { Link } from 'react-scroll';
import './TopContent.css';

export const TopContent = () => {
  const resumeUrl = '../resume/Reshni S Resume.pdf'; 

  return (
    <div className='topContent'>
      <div className='topContent_container'>
        <h1>Ms. Reshni</h1>
        <p>Bachelor of Engineering (Computer Science)</p>
        <a href={resumeUrl} download="Reshni_Resume.pdf">
          <button className='topContent_downloadbtn'>Download Resume</button>
        </a>
        <Link to="projects" smooth={true} duration={500}>
          <button className='topContent_workbtn'>My Work</button>
        </Link>
      </div>
    </div>
  );
}

export default TopContent;
