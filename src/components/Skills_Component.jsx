import React from 'react'
import skills from '../models/skills';

function Skills_Component() {
  return (
    <div>
        <p className='skillspara'>SKILLS</p>
        <ul>
        {
           skills.map((skill) => {
             return <li>{skill}</li>
            })
        }
        </ul>
    </div>
    
  )
}

export default Skills_Component