import React from 'react'

const Delete = ( {onClick} ) => {
  return (
    <div className='deleter-icon-container' onClick={onClick}>
      <img src={process.env.PUBLIC_URL + "/images/icon-delete.svg"} alt="edit button" />
      <span className='delete-cta-text'>Delete</span>
    </div>
  )
}

export default Delete