import React, { useContext } from 'react'
import { GlobalContext } from '../../context/GlobalState'

function IncomeExpenses() {

  const { transactions } = useContext(GlobalContext)

  const amounts = transactions.map(item => item.amount)

  const income = amounts
  .filter(item => item > 0)
  .reduce((acc, item) => (acc += item), 0)
  .toFixed(2)

  const expense = amounts
  .filter(item => item < 0)
  .reduce((acc, item) => (acc += item), 0) * -1
  .toFixed(2)

  return (
    <div>
        <div>
            <h2>INCOME</h2>
            <p>${income}</p>
        </div>
        <div>
            <h2>EXPENSE</h2>
            <p>${expense}</p>
        </div>
    </div>
  )
}

export default IncomeExpenses