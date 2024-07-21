import React from 'react';
import { Link } from 'react-scroll';
import './TopContent.css';

export const TopContent = () => {
  const resumeUrl = 'https://drive.google.com/file/d/1cuaE2pJhTKF-1Lh834dQRo1W606JZ7_s/view?usp=drive_link'; 

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
