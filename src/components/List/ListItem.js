import React, { useContext } from 'react'
import { GlobalContext } from '../../context/GlobalState'
import '../../style.css'


function ListItem({ item }) {
   
  const { deleteAction } = useContext(GlobalContext)
  const checkSign = item.amount < 0 ? '-' : '+'

  return (
    <li className={item.amount < 0 ? 'expense' : 'income'}>
        {item.text} <span>{checkSign}${Math.abs(item.amount)}</span>
        <button onClick={() => deleteAction(item.id)}>X</button>
    </li>
  )
}

export default ListItem