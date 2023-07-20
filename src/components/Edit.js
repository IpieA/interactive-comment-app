import React from 'react'

const Edit = ({ onClick }) => {
  return (
    <div className='edit-icon-container' onClick={onClick}>
      <img src={process.env.PUBLIC_URL + "/images/icon-edit.svg"} alt="edit button" />
      <span className='edit-cta-text'>Edit</span>
    </div>
  )
}

export default Edit