import React from 'react'
import { Element } from 'react-scroll';
import ExperianceBox from '../ExperianceBox/ExperianceBox';
import './Experiance.css'

const ExperianceContainer = () => {
  return (
    <Element className="experianceContainer" id="exp">
        <h1 className='my_exp_title'>EXPERIENCE</h1>
        <div className='experiance_info'>
            <ExperianceBox number="+0" title="Clients" />
            <ExperianceBox number="+12" title="Projects" style={{backgroundColor:"#f64c08"}}/>
            <ExperianceBox number="+5" title="Skills"/>
        </div>

    </Element>
  )
}

export default ExperianceContainer