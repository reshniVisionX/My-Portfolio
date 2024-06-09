import React from 'react'
import './ExperianceBox.css'

const ExperianceBox = ({number,title,style}) => {
  return (
    <div style={{...style}} class="experiance">
        <h1>{number}</h1>
        <p>{title}</p>
    </div>
  )
}

export default ExperianceBox