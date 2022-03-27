import React, { useState, useEffect } from 'react'
import '../../style.css'

function List() { 

  return (
    <div className="container">
        <ul>
            <li>Shopping <span>-$220</span><button>x</button></li>
        </ul>
    </div>
  )
}

export default List