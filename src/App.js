import React from 'react';
import Header from './components/Header/Header';
import TopContainer from './components/TopContainer/TopContainer';
import SkillContainer from './components/skillContainer/skillContainer';
import ProjectConatiner from './components/ProjectContainer/projectContainer';
import ExperianceContainer from './components/Experiance/ExperianceContainer';
import Contact from './components/Contact/Contact';
import Loader from './components/loader/Loader';
import Certificates from './components/certificatee/certificates'
import './App.css';

const App = () =>{
  return(
    <div>
     <Header/>
     <TopContainer/>
     <SkillContainer/>
     <Certificates/>
     <ProjectConatiner/>
     <ExperianceContainer/>
     <Loader/>
     <Contact/>
    </div>
  )
}


export default App;
