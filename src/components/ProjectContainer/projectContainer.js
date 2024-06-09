import React from 'react'
import { Element } from 'react-scroll'
import {useState} from 'react';
import Project from '../Project/project';
import './projectContainer.css';

export const ProjectContainer = () => {
    const [choose, setChoose] = useState(false);
  const console_pro = [
    {
        img:'/images/eclipse.png',
        title:"Vehicle Rental System",
        desc:"A Java console-based application for an online vehicle rental system, incorporating Java concepts to provide functionalities for both administrators and borrowers with MySQL database.",
        link:"https://github.com/reshniVisionX/vehicle_rental_system",
    },
    {
        img:'/images/eclipse.png',
        title:"Online Banking Management System",
        desc:"Console project for online banking management with OOP principles and MySQL database. Features include ATM withdrawals with OTP, automatic OTP and Account Number generation , and admin, employee, and customer roles.",
        link:"https://github.com/reshniVisionX/Online_Banking_Management_System",
    },
   
  ]

  const react_pro=[
    { 
        img:'/images/tictactoe.png',
        title:"Tic Tac Toe Game",
        desc:"A simple tic tac toe game developed using react js with 2 players playable.",
        link:"https://github.com/reshniVisionX/Simple_tic-tac-toe-Game---React-js",
    },
    {
      img:'/images/billing.png',
      title:"Billing Management System",
      desc:"The Simple Billing Management System is a React.js web application for instant bill generation without a backend. It offers a user-friendly interface for adding products, specifying quantities, and quickly calculating the total bill amount",
      link:"https://github.com/reshniVisionX/Billing_Management_System",
  },
  {
      img:'/images/crud.png',
      title:"Basic CRUD Operations",
      desc:"Basic crud operations performed with Node js and Express js in MongoDB with the help of Postman API",
      link:"https://github.com/reshniVisionX/Basic-crud-operations-with-Node-js",
  },
  {
      img:'/images/webscrap.png',
      title:"Web Scrapping",
      desc:"web application that scrapes website content into PDFs, HTML snapshots, and screenshots using Puppeteer for automation. The data, along with scrape timestamps, is stored in MongoDB for retrieval and download. The frontend interface allows users to input URLs and select desired formats with ease.",
      link:"https://github.com/reshniVisionX/Web_scrapping_React",
  },
  {
      img:'/images/conference.png',
      title:"Live Video Conferencing using React",
      desc:"Developed a real-time video conferencing application using React, featuring seamless audio and video communication. This application enables users to engage in face-to-face meetings remotely, with functionalities such as muting/unmuting audio and toggling video visibility.",
      link:"https://github.com/reshniVisionX/Video_Conference_using_react",
  },
  {
      img:'/images/travelagency.png',
      title:"Travel Agency Website",
      desc:"Complete travel website using the MERN stack, with backend connections for user signups and login features using MongoDB. You'll find a variety of custom tour packages to choose from and a lively blog where users can share their travel stories hassle-free.",
      link:"https://github.com/reshniVisionX/Travel_Agency_website_MERN",
  },
  {
    img:'/images/consultancy.png',
    title:"WayToGo Consultancy Immigration Website",
    desc:"Crafted a consultancy website dedicated to overseas education, leveraging ReactJS and JavaScript for the frontend and backend registration. The site features instant chat functionality, immigration tools, visa guidance, alumni testimonials, and a plethora of resources.",
    link:"https://github.com/reshniVisionX/WayTogo_web_using_react",
},
{
    img:'/images/travelagency.png',
    title:"EduVenture Trip Planner Website",
    desc:"Developed an educational and IV trip agency where colleges and schools can find the best-suited and top-rated packages from a curated list of options, based on user ratings and reviews.",
    link:"https://github.com/reshniVisionX/EduVenture_Planner_Website",
},
  ]

  return (
    <Element className="projectContainer" id="Projects">
        <h1 className='project_title'>PROJECTS</h1>
        <p>some project done by me</p>
        <h2 className='Pro_title'>
            <span onClick={()=>setChoose(false)} style={{marginRight:"30px",textDecoration:"underline"}}>Mern Stack Projects </span>
            <span onClick={()=>setChoose(true)} style={{textDecoration:"underline"}}>Java Console Projects</span>
        </h2>
        <div className='projectContainer_projects'>

        {choose ? (
          console_pro.map((project, index) => (
            <Project key={index} img={project.img} title={project.title} desc={project.desc} link={project.link} />
          ))
        ) : (
          react_pro.map((project, index) => (
            <Project key={index} img={project.img} title={project.title} desc={project.desc} link={project.link} />
          ))
        )}
        </div>
    </Element>
  )
}

export default ProjectContainer;
