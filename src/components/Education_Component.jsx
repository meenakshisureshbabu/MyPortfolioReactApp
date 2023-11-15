import React from 'react'

function Education_Component(props) {
  return (
    <div>
        <p className='education'>EDUCATION</p>
        <p>Bachelor Degree : {props.bdegree}</p>
        <p>Masters Degree : {props.mdegree}</p>
    </div>
  )
}

export default Education_Component