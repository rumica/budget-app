import React from 'react'

function Header({ budget }) {
  return (
    <div className='header'>
        <div className="budget">Budget: <span>${budget}</span> </div>
    </div>
  )
}

export default Header