import React from 'react'
import '../css/Card.css'
const Card = ({title,image}) => {
  return (
    <div className='card-main'>
        {title}
    </div>
  )
}

export default Card