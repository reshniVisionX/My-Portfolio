import React from 'react'
import {Element} from 'react-scroll';

import './skillContainer.css'
//import Slider from '@mui/material/Slider';

export const skillContainer = () => {
  return (
    <Element className="skillContainer" id="skills">
       <div className='skillcontainer_image'>
        <img src="http://wikiclipart.com/wp-content/uploads/2017/06/Computer-black-and-white-computer-clipart-black-and-white-free-images-2-wikiclipart.png" alt="image1"></img>
       </div>
       <div className='skillContainer_text'>
         <h2 className='skillset'>SKILLSET</h2>
         <br/>
         <b className='skill_name'>Java Programming</b>
          <div className="containers">
              <div className="skills a1"></div>
          </div><br/>

          <b className='skill_name'>C Programming</b>
          <div className="containers">
              <div className="skills a2"></div>
          </div><br/>

          <b className='skill_name'>Data Structures</b>
          <div className="containers">
              <div className="skills a3"></div>
          </div><br/>

          <b className='skill_name'>MySQL</b>
          <div className="containers">
              <div className="skills a4"></div>
          </div><br/>

          <b className='skill_name'>UI/UX Designing</b>
          <div className="containers">
              <div className="skills a5"></div>
          </div><br/>

          <b className='skill_name'>HTML/CSS</b>
          <div className="containers">
              <div className="skills a6"></div>
          </div><br/>

          <b className='skill_name'>Mern Stack</b>
          <div className="containers">
              <div className="skills a7"></div>
          </div><br/>

          <b className='skill_name'>Operating Systems</b>
          <div className="containers">
              <div className="skills a8"></div>
          </div><br/>

       </div>
    </Element>
  )
}

export default skillContainer;