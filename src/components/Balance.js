import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'

function Balance() {

  const { transactions } = useContext(GlobalContext)

  const amounts = transactions.map(item => item.amount)

  const totalAmount = amounts
  .reduce((acc, item) => (acc += item), 0)
  .toFixed(2)

  return (
    <div className='balance'>
        <h3>Your balance: <span>${totalAmount}</span></h3>
    </div>
  )
}

export default Balance