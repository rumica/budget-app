import React, { useContext } from 'react'
import ListItem from './ListItem.js'
import { GlobalContext } from '../../context/GlobalState'
import '../../style.css'

function List() { 

  const { transactions } = useContext(GlobalContext)

  return (
    <div className="container">
        <ul>
          {transactions.map(item => (
            <ListItem key={item.id} item={item}/>
          ))}
        </ul>
    </div>
  )
}

export default List